import { Component } from "react";
import { Container } from "../components/container";
import {Header} from "../components/header";
import Logo from "../assets/logo-blog.png"
import { Section } from "../components/section-flex";
import { List } from "../components/proposal-list";
import { NewProposal } from "../components/new-proposal";

export default class FormProposta extends Component{
    render(){
        return(
            <Container>
                <Header>
                    <img src={Logo} alt="Logo omega tech"/>
                </Header>
                <Section>
                    <List>
                        <h1>Minhas Propostas</h1>
                        <li>
                            <p>Data de Inicio: 12/12/2021</p>
                            <p>Data de Termino: 12/12/2022</p>
                            <p>Consumo Total: 1000 KWH</p>
                            <p>Fonte de Energia: RENOVAVEL</p>
                            <p>Submercvado: NORTE</p>
                            <p>Contratado: NÃO</p>
                            <p>Valor da Proposta: R$100.000</p>
                            <div className="buttons">
                                <button className="hire-button">Contratar</button>
                                <button className="detele-button">Excluir</button>
                            </div>
                        </li>
                        <li>
                            <p>Data de Inicio: 12/12/2021</p>
                            <p>Data de Termino: 12/12/2022</p>
                            <p>Consumo Total: 1000 KWH</p>
                            <p>Fonte de Energia: RENOVAVEL</p>
                            <p>Submercvado: NORTE</p>
                            <p>Contratado: NÃO</p>
                            <p>Valor da Proposta: R$100.000</p>
                            <div className="buttons">
                                <button className="hire-button">Contratar</button>
                                <button className="detele-button">Excluir</button>
                            </div>
                        </li>
                        <li>
                            <p>Data de Inicio: 12/12/2021</p>
                            <p>Data de Termino: 12/12/2022</p>
                            <p>Consumo Total: 1000 KWH</p>
                            <p>Fonte de Energia: RENOVAVEL</p>
                            <p>Submercvado: NORTE</p>
                            <p>Contratado: NÃO</p>
                            <p>Valor da Proposta: R$100.000</p>
                            <div className="buttons">
                                <button className="hire-button">Contratar</button>
                                <button className="detele-button">Excluir</button>
                            </div>
                        </li>
                        <li>
                            <p>Data de Inicio: 12/12/2021</p>
                            <p>Data de Termino: 12/12/2022</p>
                            <p>Consumo Total: 1000 KWH</p>
                            <p>Fonte de Energia: RENOVAVEL</p>
                            <p>Submercvado: NORTE</p>
                            <p>Contratado: NÃO</p>
                            <p>Valor da Proposta: R$100.000</p>
                            <div className="buttons">
                                <button className="hire-button">Contratar</button>
                                <button className="detele-button">Excluir</button>
                            </div>
                        </li>
                    </List>
                    <NewProposal>
                        <button>
                            +   
                        </button>
                        <p>Nova proposta</p>
                    </NewProposal>
                </Section>
            </Container>
        )
    }
}