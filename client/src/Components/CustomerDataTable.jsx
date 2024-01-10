import { useState, useEffect } from "react";
import { CustomButton } from "./CustomButton";
import getClientData from "../config/getClientsData";
import updateClientData from "../config/updateClientData";

export const CustomerDataTable = () => {
  const [clientData, setClientData] = useState([])

  //Lógica para poder obtener los datos del cliente y poder mostrarlos en la tabla
  //También modificamos la forma en la que recibimos la fecha de nacimiento para que se muestre sin horario.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getClientData();
        setClientData(data.map(client => ({
          ...client,
          birthDate: client.birthDate.split('T')[0]
        })));
      } catch (error) {
        console.error("Error fetching gender data:", error);
      }
    };
    fetchData();
  }, []);

  const handleCreateAccountNumber = async (clientId) => {
    try {
      const currentDay = new Date().toISOString().replace(/-/g, "").substring(0, 8);
      const randomNumber = Math.floor(Math.random() * 100000000);
      const accountNumber = currentDay + randomNumber.toString().padStart(8, "0");


      //Aqui actualizamos el estado local con el número de cuenta generado
      setClientData(prevClientData =>
        prevClientData.map(client =>
          client.id === clientId ? { ...client, account: accountNumber } : client
        )
      );

      //Lógica para poder enviar el numero de cuenta al backend y quede almacenado
      await updateClientData(clientId, accountNumber);
    } catch (error) {
      console.error("Error al enviar número de cuenta:", error);
    }
  };

  return (
    <div className="py-8 px-4 mx-auto max-w-screen-lg">
      <h1 className="text-2xl font-bold mb-4">Tabla de clientes</h1>
      <div className="overflow-x-auto bg-blue-200">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>Fecha de Nacimiento</th>
              <th>Email</th>
              <th>CURP</th>
              <th>Género</th>
              <th>Número de Cuenta</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            {clientData.map((client) => (
              <tr key={client.id}>
                <td className="py-2 px-3 text-center">{client.name}</td>
                <td className="py-2 px-3 text-center">{client.lastNameP} {client.lastNameM}</td>
                <td className="py-2 px-3 text-center">{client.birthDate}</td>
                <td className="py-2 px-3 text-center">{client.email}</td>
                <td className="py-2 px-3 text-center">{client.curp}</td>
                <td className="py-2 px-3 text-center">{client.gender.name}</td>
                <td className="py-2 px-3 text-center">
                  {/* Condicional para mostrar botón o numero de cuenta según sea el caso */}
                  {client.account ? (
                    client.account
                  ) : (
                    <CustomButton
                      text="Crear Cuenta"
                      onClick={() => handleCreateAccountNumber(client.id)}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};