// import { Component } from "react";
// import { Container } from "../components/container";
// import {Header} from "../components/header";
// import Logo from "../assets/logo-blog.png"
// import { Section } from "../components/section-flex";
// import { Form } from "../components/form";
// import { Link } from "react-router-dom";

// export default class ProposalForm extends Component {

//     inputTypeToDate = (e) => {
//         e.currentTarget.type = 'date';
//     }

//     inputTypeToText = (e) => {
//         e.currentTarget.type= 'text';
//     }


//     render() {
//         return (
//             <Container>
//                 <Header>
//                     <Link to="/proposal-list">
//                         <img src={Logo} alt="Logo omega tech"/> 
//                     </Link> 
//                 </Header>
//                 <Section>
//                     <div className="vertical-scroll">
//                         <Form>
//                             <p>Nova proposta</p>
//                             <div className="two-inputs">
//                                 <input 
//                                     type="text" 
//                                     placeholder="Data de início"
//                                     className="date"
//                                     onFocus={this.inputTypeToDate}
//                                     onBlur={this.inputTypeToText}
//                                 />
//                                 <input 
//                                     type="text" 
//                                     placeholder="Data de termino"
//                                     className="date"
//                                     onFocus={this.inputTypeToDate}
//                                     onBlur={this.inputTypeToText}
//                                 />
//                             </div>
//                             <span>Cargas</span>
//                             <input type="text" placeholder="Nome da empresa"/>
//                             <input type="number" placeholder="Quantidade de KWH"/>
//                             <button className="blue-button">Nova carga</button>
//                             <label htmlFor="energy-source">Fonte de energia</label>
//                             <select id="energy-source">
//                                 <option>CONVENCIONAL</option>
//                                 <option>RENOVAVEL</option>
//                             </select>
//                             <label htmlFor="submarket">Submercado</label>
//                             <select id="submarket">
//                                 <option>NORTE</option>
//                                 <option>NORDESTE</option>
//                                 <option>SUL</option>
//                                 <option>SUDESTE</option>
//                             </select>
//                             <button className="orange-button">Enviar</button>
//                         </Form>
//                     </div>
//                 </Section>
//                 <h2 className="important-text">Valor total da proposta: <span>R$ 100.000</span></h2>
//             </Container>
//         )
//     }
// }