import { Component } from "react";
import { Container } from "../components/container";
import {Header} from "../components/header";
import Logo from "../assets/logo-blog.png"
import { Form } from "../components/form";

export default class FormProposta extends Component{
    render(){
        return(
            <Container>
                <Header>
                    <img src={Logo} alt="Logo omega tech"/>
                </Header>
                    
                <Form>

                </Form>
            </Container>
        )
    }
}