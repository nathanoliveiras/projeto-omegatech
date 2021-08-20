import { Component } from "react";
import { Container } from "../components/container";
import {Header} from "../components/header";
import Logo from "../assets/logo-blog.png"
import { Form } from "../components/form";
import { Section } from "../components/section-flex";
import { Link } from "react-router-dom";
 
export default class Register extends Component{
    render(){
        return(
            <Container>
            <Header>
                <Link to="/">
                    <img src={Logo} alt="Logo omega tech"/>        
                </Link>
            </Header>
                <Section>
                    <Form>
                        <h2>Calculadora de proposta</h2>
                        <p>Cadastre-se</p>
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
                            type="submit">Cadastrar
                        </button>
                        <Link to="/">
                            <button 
                                className="blue-button" 
                                type="submit">Voltar
                            </button>
                        </Link>   
                    </Form>
                </Section>
            </Container>
        )        
    }
}
                
        