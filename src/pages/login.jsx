import { Component } from "react";
import { Container } from "../components/container";
import {Header} from "../components/header";
import Logo from "../assets/logo-blog.png"
import { Form } from "../components/form";
import { Section } from "../components/section-flex";

export default class Login extends Component {
    render(){
        return(
            <Container>
                <Header>
                    <img src={Logo} alt="Logo omega tech"/>              
                </Header>
                <Section>
                <Form>
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
                    <button className="orange-button" type="submit">Entrar</button>
                </Form>
                <Form>
                    <p>Cadastre-se</p>
                    <input 
                        type="password" 
                        placeholder="Nome"
                        name="txtNome"
                    />
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
                    <button className="blue-button" type="submit">Cadastrar</button>
                </Form>
                </Section>
            </Container>
        )
    }
}

