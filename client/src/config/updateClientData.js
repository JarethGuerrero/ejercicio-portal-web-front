import { urlApi } from "./axios";

const updateClientData = async (clientId, accountNumber) => {
  try {
    const updatedData = { account: accountNumber };

    const response = await urlApi.patch(`/client/update/${clientId}`, updatedData);
    return response.data;

  } catch (error) {
    console.error("Error updating client data", error);
    throw error;
  }
};

export default updateClientData;
