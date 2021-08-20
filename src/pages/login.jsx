import { Component } from "react";
import { Container } from "../components/container";
import {Header} from "../components/header";
import Logo from "../assets/logo-blog.png"
import { Form } from "../components/form";
import { Section } from "../components/section-flex";
import { Link } from "react-router-dom";


export default class Login extends Component {
    render(){
        return(
            <Container>
                <Header>
                        <img src={Logo} alt="Logo omega tech"/>        
                </Header>
                <Section>
                   
                <Form>
                    <h2>Calculadora de proposta</h2>
                    <p>Faça seu login</p>
                    <input 
                        type="email" 
                        placeholder="Email"
                        name="txtEmail"
                    />
                    <input 
                        type="password" 
                        placeholder="Senha"
                        name="txtPassword"
                    />
                    <button 
                        className="orange-button" 
                        type="submit">Entrar
                    </button>
                    <p>Ainda não tem conta?<Link to='/register'>Cadastre-se aqui</Link></p>

                </Form>
                
                </Section>
            </Container>
        )
    }
}

