import React, {useRef, useContext} from 'react';
import * as Yup from 'yup';
import { Link } from "react-router-dom";
import { Form } from '@unform/web';
import Template from "./Template";
import Input from "../components/Input";
import Card from '../components/Card';
import Button from '../components/Button';
import {Context} from '../providers/auth';


export default function Login() {
    
    const { handleLogin } = useContext(Context);
    const formRef = useRef(null)
    async function handleSubmit(data){
        try{
            formRef.current.setErrors({});
            const schema = Yup.object().shape({
                email: Yup.string()
                  .email('Insira um e-mail válido')
                  .required('Esse campo é obrigatório'),
                password: Yup.string()
                  .required('Esse campo é obrigatório'),
              });
              await schema.validate(data, {
                abortEarly: false,
              });
              await  handleLogin( data);
              
        }catch(err){
            const validationErrors = {};
            if (err instanceof Yup.ValidationError) {
               err.inner.forEach(error => {
                    validationErrors[error.path] = error.message;
                });
                formRef.current.setErrors(validationErrors);
            }
        }
    }

    return (
        <Template>
            <Card className="lg:w-1/3 w-11/12  h-auto p-10 pt-12 pb-12">
                <Form onSubmit={handleSubmit} ref={formRef} className="w-full flex flex-col items-center justify-center">
                    <h1 className="font-bold text-2xl mb-2 ">Faça seu login</h1>
                    <Input name="email" label="E-mail" type="email" className="w-full"  placeholder="E-mail" />
                    <Input type="password"  placeholder="Senha" className="w-full"  name="password" label="Senha"/> 
                    <Button type="submit" className="mt-2 mb-4 rounded shadow-md hover:bg-opacity-80 p-2 pl-6 pr-6 bg-yellow-500 text-white font-bold">
                        Entrar
                    </Button>
                    <p className="font-bold">Ainda não tem conta? <Link  className="text-blue-500 hover:text-blue-400" to='/register'>Cadastre-se aqui</Link></p>
                </Form>
                
            </Card>

        </Template>
    )
}



