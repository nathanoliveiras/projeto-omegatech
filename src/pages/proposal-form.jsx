import React,{useRef, useState} from 'react'
import Template from './Template'
import {Form} from '@unform/web';
// import * as Yup from 'yup';
import Card from '../components/Card';
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';
import Modal from '../components/Modal';
import LoadsInput from '../components/LoadsInput';
import api from '../services/api';


function ProposalForm() {

    const [openModal, setOpenModal] = useState(false);
    const [loads, setLoads] = useState([]);
    const [totalValue, setTotalValue] = useState(0);
    const [ proposal, setProposal] = useState({submarket:0, energy_source:0})
    
    async function handleLoadSubmit(data){
        const joined = loads.concat(data);
        setLoads([...joined]);
        setOpenModal(false);        
    }

    function handleChange(e){
        const { name, value} = e.target;
        setProposal({...proposal,[name]:value});
    }

 


    function remove(index){
        const newLoads = loads.splice(index,1);
        setLoads([...newLoads]);   
        loads.map((load, index)=> <LoadsInput load={load} index={index} remove={remove} />)
    }
   
    function calculate(){
        
    }
    
    async function handleProposalSubmit(data){
        await api.post('/proposals', data);
    }
    

    function handleModal(){
        setOpenModal(!openModal);
    }

    const submarket_options = [
        {description:"NORTE", value:2},
        {description:"NORDESTE", value:-1},
        {description:"SUL", value:3.5},
        {description:"SULDESTE",value:1.5}
    ];

    const energy_source_options=[
        {description:"CONVENCIONAL", value:5},
        {description:"RENOVAVEL", value:-2}
    ]

    const formRef = useRef(null);
    const loadFormRef = useRef(null);
    return (
        <Template logged="true">
            <Form  ref={formRef} onSubmit={handleProposalSubmit} className="lg:w-5/6 w-11/12">
                <Card className="w-full lg:p-4 p-2 pt-6 flex flex-col items-center justify-center ">
                    <h1 className="font-bold text-3xl text-center mb-2">Adicionar nova proposta</h1>
                    <div className="lg:grid flex flex-col w-full p-4 lg:grid-cols-2">
                        <div className="flex w-full flex-col">
                            <div className="flex items-center w-full">
                                <h2 className="font-bold text-xl float-left">Dados gerais</h2>
                            </div>
                            <hr className="w-full mb-2"/>
                            <div className="flex w-full lg:flex-row flex-col">
                                <Input name="start_date" type="date" contentClass="lg:w-1/2 w-full mr-0 lg:mr-2" placeholder="Data final" label="Data inicial" />
                                <Input name="end_date" type="date" contentClass=" lg:w-1/2 w-full" placeholder="Data final" label="Data final" />
                            </div>
                            <div className="flex w-full lg:flex-row flex-col">
                                <Select options={energy_source_options} onChange={handleChange} contentClass="lg:w-1/2 w-full mr-0 lg:mr-2" name="energy_source" placeholder="Fonte de Energia" label="Fonte de Energia" />
                                <Select options={submarket_options} onChange={handleChange} contentClass=" lg:w-1/2 w-full" name="submarket" placeholder="Sub-mercado" label="Sub-mercado" />
                            </div>
                        </div>
                        <div className="lg:ml-4 ml-0 mt-4 lg:mt-0">
                            <div className="flex items-center w-full justify-between">
                                <h2 className="font-bold text-xl float-left mr-8">Cargas</h2>
                                <Button type="button" onClick={handleModal} className="rounded shadow-md hover:bg-opacity-80  pl-6 pr-6 bg-blue-500 text-white font-bold">Adicionar carga</Button>
                            </div>
                            <hr className="w-full mb-2"/>
                            <div className="" style={{minHeight:'200px'}}>
                                <ul className="load-list">
                                    {loads.map((load, index)=> <LoadsInput load={load} index={index} remove={remove} />)}
                                </ul>
                            </div>
                            <hr className="w-full mb-2"/>
                            <span className="font-bold text-lg">Valor total da proposta: </span>
                        </div>
                    </div>
                    <Button type="submit" className="mt-2 mb-4 rounded shadow-md hover:bg-opacity-80 p-2 pl-6 pr-6 bg-yellow-500 text-white font-bold">Cadastrar</Button>
                </Card>
            </Form>
                    {openModal && 
                    (<Modal title="Adicionar carga" clickClose={handleModal} classCard="lg:w-2/5 w-11/12 p-4">
                        <Form  ref={loadFormRef} onSubmit={handleLoadSubmit}> 
                            <Input name="company_name" label="Nome da empresa"  placeholder="Nome da empresa" />
                            <Input name="consumption_kwh" label="Quantidade em KWH" type="number" placeholder="Quantidade em KWH" />
                            <Button type="submit" className="mt-2 mb-4 rounded shadow-md hover:bg-opacity-80 p-2 pl-6 pr-6 bg-yellow-500 text-white font-bold">Adicionar</Button>
                        </Form>
                    </Modal>)}
        </Template>
    )
}

export default ProposalForm
