import React from 'react'
import Card from './Card'
import {XIcon} from '@heroicons/react/outline'

function Modal({children, title, classCard, clickClose}) {
    return (
        <div className="w-screen h-screen flex items-center justify-center fixed bg-gray-600 bg-opacity-20 top-0 left-0">
            <Card className={classCard}>
                <div className="flex h-8 mb-4 justify-between pb-2 border-gray-400 border-b border-solid">
                    <h2 className="font-bold text-2xl">{title}</h2>
                    <XIcon onClick={()=>clickClose()} className="text-base text-gray-300 hover:text-opacity-80 cursor-pointer"/>
                </div>
                {children}
            </Card>
        </div>
    )
}

export default Modal
