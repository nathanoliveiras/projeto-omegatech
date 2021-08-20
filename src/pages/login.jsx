import { Component } from "react";
import Logo from "../assets/logo-blog.png"
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
                    <Link to ="/proposal-list">
                        <button className="blue-button" type="submit">Cadastrar</button>
                    </Link>                   
                </Form>
                </Section>
            </Container>
        )
    }
}

