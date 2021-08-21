import React from 'react'

function Button({children, className, type, onClick=null }) {
    return (
        type==='submit'?
        (<button type={type} className={className + ' focus:outline-none'} >
            {children}
        </button>):
        (<button type={type} onClick={()=>onClick()} className={className + ' focus:outline-none'} >
        {children}
    </button>)
    )
}

export default Button
