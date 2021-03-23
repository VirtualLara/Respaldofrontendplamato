import React, { Component } from 'react'

import CardTour from '../components/CardTour.js';
import CardTourDos from '../components/cardTourDos.js';

export default class Tours extends Component {
    render() {
        return (
            <div >
                <br/>
                <h1 class="nav justify-content-center" style={{color: 'black', }}> 
                <span className="badge bg-warning"> Ponemos a tu disposicion nuestras Experiencias </span> </h1> 
                <hr/>
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap:'wrap',
                    justifyContent: 'center', width:'100%' }} >                         
                    <CardTourDos/>                                                 
                    <CardTourDos/>                        
                    <CardTourDos/>                                                 
                    <CardTourDos/>                                               
                </div>                          
            </div>
        )
    }
}
