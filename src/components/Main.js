import React from 'react'

function Main({children}) {
    return (
        <main className="w-full flex items-center justify-center lg:p-10 p-2" style={{height: `calc( 100vh - 4rem )`}}>
            {children}
        </main>
    )
}

export default Main
