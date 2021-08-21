import React from 'react'

function Button({children, className }) {
    return (
        <button className={className} >
            {children}
        </button>
    )
}

export default Button
