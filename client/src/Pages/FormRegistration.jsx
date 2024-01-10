import { useState, useEffect } from "react"
import getGender from "../config/getGender"
import { useForm } from "../hooks/useForm"
import { urlApi } from "../config/axios"
import { CustomButton } from "../Components/CustomButton"
import { Toaster, toast } from 'sonner'
import { BiCheck } from 'react-icons/bi'
import { useNavigate } from "react-router-dom"



export const FormRegistration = () => {
  const [genderData, setGenderData] = useState([])
  const [selectedGender, setSelectedGender] = useState('')

  const initialForm = {
    name: "",
    lastNameM: "",
    lastNameP: "",
    birthDate: "",
    email: "",
    curp: "",
    gender: selectedGender
  }

  const {
    formState,
    onInputChange,
    updateFormState,
    validateForm,
    isFormSubmitted,
    setIsFormSubmitted,
    setErrors,
    errors
  } = useForm(initialForm)

  const { name, lastNameM, lastNameP, birthDate, email, curp, } = formState


  //Obtener el genero desde la api
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getGender();
        setGenderData(data);
      } catch (error) {
        console.error("Error fetching gender data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    updateFormState({ gender: selectedGender });
  }, [selectedGender]);


  const handleGenderSelection = (e) => {
    setSelectedGender(e.target.value)
  }
  const navigate = useNavigate()

  const onSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setIsFormSubmitted(true);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await urlApi.post('/client/create', formState);
        if (response.status === 201) {
          toast('Cliente creado con éxito', {
            description: '¿Deseas crear un Número de Cuenta para este cliente?',
            icon: <BiCheck style={{ color: 'green', fontSize: '1.5rem' }} />,
            action: {
              label: "Crear Número de Cuenta",
              onClick: () => {
                navigate('/clients')
              }
            }
          })

        } else {
          console.error('Error al enviar datos al servidor:', response.statusText);
        }
      } catch (error) {
        console.error('Error al enviar datos al servidor:', error);
      }
    } else {
      console.log("Formulario inválido, corrige los errores: ", formErrors);
    }
  };

  return (
    <section className='w-full px-8 flex items-center justify-center flex-col' >
      <h2 className='flex my-4 self-start text-2xl font-bold'>Bienvenido</h2>
      <div className='w-[725px] flex flex-col gap-6 bg-slate-300 p-8 border-2 rounded-md shadow-xl border-azul-oscuro'>
        <form className='grid grid-cols-2 gap-6' onSubmit={onSubmit} >
          <div className='flex flex-col'>
            <label htmlFor="firstName">Nombre(s)</label>
            <input className='focus:outline-none'
              type="text"
              name="name"
              placeholder="Nombre"
              value={name}
              onChange={onInputChange}
            />
            {errors.name && <span className="text-red-500">{errors.name}</span>}
          </div>
          <div className='flex flex-col'>
            <label htmlFor="">Apellido Paterno</label>
            <input className='focus:outline-none'
              type="text"
              name="lastNameP"
              placeholder="Apellido Paterno"
              value={lastNameP}
              onChange={onInputChange}
            />
            {errors.lastNameP && <span className="text-red-500">{errors.lastNameP}</span>}
          </div>
          <div className='flex flex-col'>
            <label htmlFor="">Apellido Materno</label>
            <input className='focus:outline-none'
              type="text"
              name="lastNameM"
              placeholder="Apellido Materno"
              value={lastNameM}
              onChange={onInputChange}
            />
            {errors.lastNameM && <span className="text-red-500">{errors.lastNameM}</span>}
          </div>
          <div className='flex flex-col'>
            <label htmlFor="">Fecha de Nacimiento</label>
            <input className='focus:outline-none'
              type="date"
              name="birthDate"
              placeholder="Fecha de Nacimiento"
              value={birthDate}
              onChange={onInputChange}
            />
            {errors.birthDate && <span className="text-red-500">{errors.birthDate}</span>}
          </div>
          <div className='flex flex-col'>
            <label htmlFor="">Sexo</label>
            <select
              className='focus:outline-none'
              value={selectedGender}
              onChange={handleGenderSelection}
            >
              <option value="">Seleccione un género</option>
              {genderData.map((genderOption) => (
                <option key={genderOption.id} value={genderOption.id}>
                  {genderOption.name}
                </option>
              ))}
            </select>
            {errors.gender && <span className="text-red-500">{errors.gender}</span>}
          </div>
          <div className='flex flex-col'>
            <label htmlFor="">Correo electrónico</label>
            <input className='focus:outline-none'
              type="email"
              name="email"
              placeholder="Correo Electrónico"
              value={email}
              onChange={onInputChange}
            />
            {errors.email && <span className="text-red-500">{errors.email}</span>}
          </div>
          <div className='flex flex-col'>
            <label htmlFor="">Curp</label>
            <input className='focus:outline-none'
              type="text"
              name="curp"
              placeholder="Curp"
              value={curp}
              onChange={onInputChange}
            />
            {errors.curp && <span className="text-red-500">{errors.curp}</span>}
          </div>
          <CustomButton text={'Registrar cliente'} />
        </form>
      </div>
      <Toaster />
    </section>
  )
}
