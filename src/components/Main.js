import React from 'react'

function Main({children}) {
    return (
        <main className="w-full flex items-center justify-center lg:p-10 p-2" >
            {children}
        </main>
    )
}

export default Main
