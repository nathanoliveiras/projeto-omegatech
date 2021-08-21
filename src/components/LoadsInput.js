import React from 'react'
import Input from './Input';
import {Scope} from '@unform/core';
import { TrashIcon } from '@heroicons/react/outline';

export default function LoadsInput({load, index, remove}) {
    return (
        <Scope path={`loads[${index}]`} >
            <div key={index} className="flex items-center">
                <span className="w-3/5 text-center mr-1">{load.company_name}</span> | 
                <span className="w-1/5 text-center ml-1 mr-1">{load.consumption_kwh + 'KWH'}</span>|
                {/* <TrashIcon onClick={(index)=>remove(index)} className="w-6 cursor-pointer h-6 mr-4 text-red-500 hover:text-opacity-80" /> */}
            </div>
            <Input name={`company_name`} value={load.company_name} className="hidden"/>
            <Input name={`consumption_kwh`} className="hidden" value={load.consumption_kwh}/>
        </Scope>
    
    )
}
