import React, {useRef, useEffect} from 'react';
import {useField} from '@unform/core';

function Select({name, options, label, contentClass, className, ...rest}) {
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
        <div className={` flex flex-col mb-2 ${contentClass}`}>
            <label className="font-bold text-base mb-1">{label}</label>
            <select name={name} className={` focus:border-blue-500 p-2 border-solid border focus:outline-none block w-full focus:ring focus:ring-blue-500 focus:ring-opacity-50 rounded-md shadow-sm ${className && className} ${error?'border-red-400':'border-gray-300' }` } {...rest} >
                {options.map(option=><option key={option.description} value={option.description}>{option.description}</option>)}
            </select>
            {error && <span className="mt-1 text-red-500 w-full">{error}</span>}
        </div>
    )
}

export default Select
