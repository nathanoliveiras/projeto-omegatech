import React,{useEffect, useRef} from 'react'
import { useField} from '@unform/core'

function Input({name, label, ...rest}) {
    const inputRef =  useRef(null);
    const { fieldName, registerField, error} = useField(name)

    useEffect( ()=>{
        registerField({
        name: fieldName,
        ref: inputRef,
        getValue: ref => {
          return ref.current.value
        },
        setValue: (ref, value) => {
          ref.current.value = value
        },
        clearValue: ref => {
          ref.current.value = ''
        },
      })
    },[fieldName, registerField]);

    return (
        <div className="w-full flex flex-col mb-2">
            <label className="font-bold text-base mb-1">{label}</label>
            <input ref={inputRef} className={` focus:border-blue-500 p-2 border-solid border focus:outline-none block w-full focus:ring focus:ring-blue-500 focus:ring-opacity-50 rounded-md shadow-sm ${error?'border-red-400':'border-gray-300' }` } name={name} {...rest} />
            {error && <span className="mt-1 text-red-500 w-full">{error}</span>}
        </div>
    )
}

export default Input
