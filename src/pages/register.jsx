import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import {Form} from '@unform/web';
import * as Yup from 'yup';
import Template from "./Template";
import Input from "../components/Input";
import Card from '../components/Card';
import Button from '../components/Button';

export default function Register() {
    const formRef = useRef(null)
  
    async function handleSubmit(data){
        try{
            formRef.current.setErrors({});
            const schema = Yup.object().shape({
                email: Yup.string()
                  .email('Insira um e-mail válido')
                  .required('Esse campo é obrigatório'),
                password: Yup.string()
                  .min(8, 'Tamanho mínimo 8 caracteres')
                  .required('Esse campo é obrigatório'),
                nome: Yup.string().min(3,'Tamanho mínimo 3 caracteres').required('Esse campo é obrigatório')
              });
              await schema.validate(data, {
                abortEarly: false,
              });
              // Validation passed
              console.log(data);
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
            <Card className="lg:w-1/3 w-11/12 h-auto p-10 pt-12 pb-12">
                <Form onSubmit={handleSubmit} ref={formRef} className="w-full flex flex-col items-center justify-center">
                    <h1 className="font-bold text-2xl mb-2 ">Cadastre-se</h1>
                    <Input name="email" className="w-full" label="E-mail" type="email" placeholder="E-mail"  />
                    <Input name="nome" className="w-full" label="Nome" type="text" placeholder="Nome"  />
                    <Input type="password" className="w-full"  placeholder="Senha" name="password" label="Senha" /> 
                    <Button type="submit" className="mt-2 mb-4 rounded shadow-md hover:bg-opacity-80 p-2 pl-6 pr-6 bg-yellow-500 text-white font-bold">
                       Cadastrar
                    </Button>
                    <p className="font-bold">Já é cadastrado? <Link  className="text-blue-500 hover:text-blue-400" to='/'>Clique aqui para login</Link></p>
                </Form>                
            </Card>

        </Template>
    )
}


