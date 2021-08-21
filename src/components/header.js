import React,{useContext} from 'react';
import Logo from '../assets/logo-blog.png'
import {Context} from '../providers/auth';
import Button from './Button';

function Header({logged}) {
    const { handleLogout } = useContext(Context)
    return (
        <header className="w-full h-16 bg-blue-500 flex justify-between pr-4 pl-4">
            <div className="h-full p-2">
                <img src={Logo} alt="logo" className="h-full w-auto"></img>
            </div>
            { logged && <Button onClick={()=>handleLogout()} className="mt-2 mb-4 rounded shadow-md hover:bg-opacity-80 p-2 pl-6 pr-6 bg-red-500 text-white font-bold">Sair</Button>}
        </header>
    )
}

export default Header
