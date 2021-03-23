import 'popper.js';
import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import ModalVideo from '../components/Modal.js';

import '../styles/carTour.css';

export default class CardTour extends Component {
    render() {
        return (
            <div style={{ border: '3px solid', borderRadius:'3%', /* borderColor:'#5DADE2' */ borderColor: 'orange', 
                background:'white', padding: '5px', margin: '5px', }} >
                    
                <div className="card" style={{ width: '25rem', padding: '5px', margin: '5px' }}>
                    <img src="https://www.seguros.press/wp-content/uploads/2020/11/Ofertas-del-Buen-Fin-2020-para-ir-de-viaje.jpg" 
                        className="card-img-top image" alt="..." />

                    <div className="card-body">

                        <h3 className="card-title  bg-info" style={{ textAlign:'center'}}> Vamos a la playa </h3>
                        
                        <p className="card-text"> Vive un fin de semana de pelos. <br/>
                                            Ven a divertirte con familia o amigos este fin de semna a la playa. </p>

                        <hr/>
                        <ul className="list-group">

                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <h6 style={{ width:'55%'}}> <li className="list-group-item "> Costo Adulto: </li> </h6> 
                                <h6 style={{ textAlign:'center', width:'45%'}}> <li className="list-group-item bg-success"> $4,500.00 </li> </h6>
                            </div>
                                                       
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <h6 style={{ width:'30%' }}> <li className="list-group-item"> Adultos: </li> </h6>
                                <input class="form-control" type="number" 
                                        placeholder="0" min='0' 
                                        style={{ width:'20%', height:'45px'}}></input>
                                <h6 style={{ width:'30%' }}> <li className="list-group-item"> Niños: </li> </h6>
                                <input class="form-control" type="number" 
                                        placeholder="0" min='0' 
                                        style={{ width:'20%', height:'45px'}}></input>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <h6 style={{ width:'55%' }}> <li className="list-group-item"> Total a pagar: </li> </h6>
                                <h6 style={{ width:'45%', height:'45px'}}> <li className="list-group-item"> $ 10,520.00 </li> </h6>
                            </div>

                        </ul>
                        
                        <div style={{ display:'flex', flexDirection:'row', flexWrap:'wrap', 
                                    justifyContent:'center', alignItems:'center'  }}>

                            <ModalVideo buttonLabel='Ver video' style={{ margin:'3px'}}  />

                            <button data-tip data-for='tooltipBtn' type="button" 
                                    className="btn btn-secondary" style={{ width:'30%', margin:'3px', fontWeight:'bold' }}> Itinerario </button>

                            <ReactTooltip id='tooltipBtn' place='top' type='info' effect='solid' >
                                    <h3 style={{ color: 'orange', textAlign:'center' }}>Tres dias-tres noches</h3>
                                    <h5 style={{ color: 'yellow' }}> Itinerario: </h5>
                                    <ul>
                                        <h6 style={{ fontWeight:'bold', color:'black' }} > Aqui algo: </h6>
                                        <li style={{ color:'white' }} > Respuesta de los anterior </li>
                                        <h6 style={{ fontWeight:'bold', color:'black' }} > Aqui algo: </h6>
                                        <li style={{ color:'white' }} > Respuesta de los anterior </li>
                                        <h6 style={{ fontWeight:'bold', color:'black' }} > Aqui algo: </h6>
                                        <li style={{ color:'white' }} > Respuesta de los anterior </li>
                                        <h6 style={{ fontWeight:'bold', color:'black' }} > Aqui algo: </h6>
                                        <li style={{ color:'white' }} > Respuesta de los anterior </li>
                                        <h6 style={{ fontWeight:'bold', color:'black' }} > Aqui algo: </h6>
                                        <li style={{ color:'white' }} > Respuesta de los anterior </li>
                                        <h6 style={{ fontWeight:'bold', color:'black' }} > Aqui algo: </h6>
                                        <li style={{ color:'white' }} > Respuesta de los anterior </li>   
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

