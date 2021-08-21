import React from 'react';
import Logo from '../assets/logo-blog.png'

function Header({dropdown = null}) {
    return (
        <header className="w-full h-16 bg-blue-500 p-2 pl-4 pr-4">
            <img src={Logo} alt="logo" className="h-full w-auto"></img>
            { dropdown && dropdown}
        </header>
    )
}

export default Header
