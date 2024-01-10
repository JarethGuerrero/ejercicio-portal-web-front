import React from 'react';
import bancoIcon from '../assets/bancoIcon.png'
import { Link } from 'react-router-dom';

export const Header = ({ pageTitle }) => {
    return (
        <header className='p-4 flex items-center justify-between '>
            <Link to="/" className='flex-1 flex gap-3 items-center'>
                <img className='w-7' src={bancoIcon} alt="Portal Bancario" />
                <span>{pageTitle}</span>
            </Link>
            <h1 className='flex-1 text-center font-sans'>Cliente</h1>
            <ul className='flex-1 justify-end flex'>
                <li className='flex gap-4'>
                    <Link to="/clients">Cuentas creadas</Link>
                    <Link to="/">Ir a Inicio</Link>
                </li>
            </ul>
        </header>
    )
}
