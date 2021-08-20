import { Component } from "react";
import Logo from "../assets/logo-blog.png"

import { Link } from "react-router-dom";

export default class ProposalList extends Component{

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
                            <p>Submercado: NORTE</p>
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
                            <p>Submercado: NORTE</p>
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
                            <p>Submercado: NORTE</p>
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
                            <p>Submercado: NORTE</p>
                            <p>Contratado: NÃO</p>
                            <p>Valor da Proposta: R$100.000</p>
                            <div className="buttons">
                                <button className="hire-button">Contratar</button>
                                <button className="detele-button">Excluir</button>
                            </div>
                        </li>
                    </List>
                    
                        <NewProposal>
                        <Link to="/proposal-form">
                            <button>
                                +   
                            </button>
                            </Link>
                        
                            <p>Nova proposta</p>
                        </NewProposal>
                    
                </Section>
            </Container>
        )
    }
}