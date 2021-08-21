import React from 'react'

function Button({children, className, type, onClick=null, id }) {
    return (
        type==='submit'?
        (<button type={type} className={className + ' focus:outline-none'} >
            {children}
        </button>):
        (<button type={type} onClick={(e)=>onClick(e)} data-id={id} className={className + ' focus:outline-none'} >
        {children}
    </button>)
    )
}

export default Button
