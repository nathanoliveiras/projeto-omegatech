import { Component } from "react";
import { Container } from "../components/container";
import {Header} from "../components/header";
import Logo from "../assets/logo-blog.png"
import { Form } from "../components/form";

export default class Login extends Component {
    render(){
        return(
            <Container>
                <Header>
                    <img src={Logo} alt="Logo omega tech"/>              
                </Header>
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
                        <button className="botao-login" type="submit">Entrar</button>
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
                    <button classname="botao-cadastro" type="submit">Cadastrar</button>
                </Form>
            </Container>
        )
    }
}

