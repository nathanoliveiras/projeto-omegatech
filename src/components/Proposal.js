import React from 'react'
import Button from './Button';
import api from '../services/api';
import { CheckIcon, TrashIcon} from '@heroicons/react/outline'


function Proposal({data}) {

    function convertDate(date){
        return new Date(date).toLocaleDateString();
    }
    
    async function hire(e) {
        console.log(e);
        const data = e.target.dataset.id;
        const response = await api.patch(`/proposals/${data}`);
    }

    async function deleteProposal(e) {
        console.log(e);
        const data = e.target.dataset.id;
        const response = await api.delete(`/proposals/${data}`);
    }

    return (
        <div className="w-full flex flex-col p-4 mt-4 rounded-lg bg-gray-300 shadow-md">
            <div className="flex">
                <span className="mr-4"><b>Data de início:</b><br/>{convertDate(data.start_date)}</span>
                <span className=""><b>Data de término:</b><br/>{convertDate(data.end_date)}</span>
            </div>
            <div className="flex">
                <span className="mr-4"><b>Fonte de energia:</b><br/>{data.energy_source}</span>
                <span><b>Submercado:</b><br/>{data.submarket}</span>
            </div>
            <div className="flex">
                <span className="mr-4"><b>Consumo total:</b><br/>{data.total_consumption}</span>
                <span><b>Valor da proposta:</b><br/>{data.proposal_value}</span>
            </div>
            <span><b>Contratado:</b>{data.hired ? 'Sim' :'Não'}</span>
            <div className="flex mt-2">
                <Button type="button" className=" flex items-center rounded mr-4 shadow-md hover:bg-opacity-80 p-2 pl-6 pr-6 bg-green-500 text-white font-bold" id={data.public_id} onClick={hire}>
                    <CheckIcon className="font-bold text-base mr-1 h-4 w-4"/>
                    Contratar
                </Button>
                <Button type="button" className="flex items-center rounded shadow-md hover:bg-opacity-80 p-2 pl-6 pr-6 bg-red-500 text-white font-bold" id={data.public_id} onClick={deleteProposal}>
                    <TrashIcon className="font-bold text-base mr-1 h-4 w-4"/>
                    Excluir
                </Button>
            </div>
        </div>
    )
}

export default Proposal
