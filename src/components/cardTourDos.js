import 'popper.js';
import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import ModalVideo from '../components/Modal.js';

import '../styles/cardTourDos.css';

export default class CardTour extends Component {
    render() {
        return (
            <div className='content' >
                    
                <div className="card contentInfo">
                    <img src="https://www.seguros.press/wp-content/uploads/2020/11/Ofertas-del-Buen-Fin-2020-para-ir-de-viaje.jpg" 
                        className="card-img-top image" alt="..." />

                    <div className="card-body">

                        <h3 className="card-title titleInfo" > Vamos a la playa </h3>

                        <div className='contentInfoPrice' >
    
                            <div  className='contentInfoP'>
                                <p className="card-text descr"> Vive un fin de semana de pelos. <br/>
                                            Ven a divertirte con familia o amigos este fin 
                                            de semna a la playa. Ven a divertirte con familia
                                            o amigos este fin sadasdas dsdsadsas sasa saas.</p>
                            </div>

                            <div className='infoPrice' > 
                                <h5 className='titlePrice'> Costos: </h5>
                                <h6 className='titlePrice'> Adulto: </h6>
                                <h6 className='price'> $ 5,000.00 </h6>
                                <h6 className='titlePrice'> Niño: </h6>
                                <h6 className='price'> $ 3,500.00 </h6>

                            </div>

                        </div>
                        
                        <ul className="list-group info">
                                                       
                            <div className='contentSlectors'>

                                <h6 className='titleSelector'> <li className="list-group-item"> Adultos: </li> </h6>
                                <input class="form-control selectorInput" type="number" placeholder="0" min='0'/>
                               <h6 className='titleSelector'> <li className="list-group-item"> Niños: </li> </h6>
                                <input class="form-control selectorInput" type="number" placeholder="0" min='0'/>

                            </div>

                            <div className='contentTotal'>
                                <h6 className='total'> <li className="list-group-item"> Total a pagar: </li> </h6>
                                <h6 className='total'> <li className="list-group-item"> $ 10,520.00 </li> </h6>
                            </div>

                        </ul>
                        
                        <div className='contentBtn'>

                            <ModalVideo buttonLabel='Ver video' style={{ margin:'3px'}}  />

                            <button data-tip data-for='tooltipBtn' type="button" 
                                    className="btn btn-secondary btnTooltip" > Itinerario </button>

                            <ReactTooltip id='tooltipBtn' place='top' type='info' effect='solid' >
                                    <h3 className='titleTolltip'>Tres dias-tres noches</h3>
                                    <h5 className='subtitleTooltip'> Itinerario: </h5>
                                    <ul>
                                        <h6 className='encabezadoTooltip'> Aqui algo: </h6>
                                        <li className='descrTooltip'> Respuesta de los anterior </li>
                                        <h6 className='encabezadoTooltip'> Aqui algo: </h6>
                                        <li className='descrTooltip'> Respuesta de los anterior </li>
                                        <h6 className='encabezadoTooltip'> Aqui algo: </h6>
                                        <li className='descrTooltip'> Respuesta de los anterior </li>
                                        <h6 className='encabezadoTooltip'> Aqui algo: </h6>
                                        <li className='descrTooltip'> Respuesta de los anterior </li>
                                        <h6 className='encabezadoTooltip'> Aqui algo: </h6>
                                        <li className='descrTooltip'> Respuesta de los anterior </li>
                                        <h6 className='encabezadoTooltip'> Aqui algo: </h6>
                                        <li className='descrTooltip'> Respuesta de los anterior </li>
                                    </ul>
                            </ReactTooltip>

                            <a href="/" className="btn btn-primary" style={{ width:'30%', margin:'3px' }}>  Cotizar </a>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

