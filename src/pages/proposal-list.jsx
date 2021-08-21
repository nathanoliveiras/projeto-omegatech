import React ,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { PlusIcon } from '@heroicons/react/outline';
import Proposal from '../components/Proposal';
import Template from './Template/';
import api from '../services/api';
import Spinner from '../components/Spinner';

function ProposalList() {
    const [proposal, setProposal] = useState([])
    useEffect(()=>{
      async function getProposal(){
         const {data} =  await api.get('/proposal');
         setProposal({...data})
      }
      getProposal();
    },[]);

    if(proposal===[]){
      return <Spinner/>
    }
    
    return (
        <Template logged="true">
            <div className="w-full lg:h-full h-auto lg:grid flex  lg:grid-cols-2 ">           
                <div className="w-full p-2">
                  <div class="flex w-full justify-between">
                    <div className="font-bold text-2xl">Minhas propostas</div>
                    <Link to="/proposal-form" className="rounded  shadow-md hover:bg-opacity-80 lg:hidden flex items-center justify-center  pl-6 pr-6 bg-yellow-500 text-white font-bold">Nova proposta</Link>
                  </div>
                    <div className="lg:overflow-auto" style={{maxHeight:'450px'}}>
                      {proposal.map(data=><Proposal data={data} />)}
                    </div>
                </div>
                <div className="lg:flex hidden items-center justify-center h-full w-full ">
                    <div className="flex flex-col items-center justify-center">
                        <Link to="/proposal-form" className="hover:bg-opacity-80 focus:outline-none bg-yellow-500 text-white font-bold text-6xl flex items-center justify-center h-32 w-32" style={{
                            borderRadius:'50%'
                        }}>
                          <PlusIcon className="w-4/5 h-4/5" />
                        </Link>
                        <h3 className="font-bold text-xl">Nova proposta</h3>
                    </div>
                </div>
            </div>
        </Template>
    )
}

export default ProposalList
