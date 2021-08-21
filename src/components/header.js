import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo-blog.png'

function Header({logged}) {
    return (
        <header className="w-full h-16 bg-blue-500 flex justify-between pr-4 pl-4">
            <div className="h-full p-2">
                <img src={Logo} alt="logo" className="h-full w-auto"></img>
            </div>
            { logged && <Link className="mt-2 mb-4 rounded shadow-md hover:bg-opacity-80 p-2 pl-6 pr-6 bg-red-500 text-white font-bold">Sair</Link>}
        </header>
    )
}

export default Header
