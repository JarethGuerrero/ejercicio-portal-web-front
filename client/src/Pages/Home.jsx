import React from 'react'
import { Link } from 'react-router-dom'
import { CustomButton } from '../Components/CustomButton'

export const Home = () => {
  return (
    <section className='w-full px-8 flex flex-col items-center'>
      <h2 className='flex my-4 self-start text-2xl font-bold'>Bienvenido</h2>
      <div className='p-6 w-[600px] gap-5 bg-slate-300 shadow-xl flex flex-col items-center border-2 rounded-md border-azul-oscuro'>
        <p className='text-center'>A continuación te solicitaremos los siguientes datos para poder comenzar con tu registro:</p>
        <div className='w-4/5 flex flex-row justify-between'>
          <ul className='list-disc'>
            <li>Nombre(s)</li>
            <li>Apellidos</li>
            <li>Edad</li>
            <li>Sexo</li>
            <li>Correo electrónico</li>
            <li>CURP</li>
          </ul>
          <div className='flex items-center'>
            <Link to="/customer-registration" >
              <CustomButton text={'Registrar Cliente'} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
