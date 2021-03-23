import React, { Component } from 'react';

import Carrousel from '../components/Carrousel.js';
import groupCard from '../components/groupCard.js';
import GroupCard from '../components/groupCard.js';

export default class Page extends Component {
    render() {
        return (
            <div>
                
                <Carrousel/>

                <div className='container'>
                    <div style= {{ width: '100%', display: 'flex', flexDirection: 'row' }}>
                        <div style= {{ width: '50%', display: 'block', flexDirection: 'column' }}>
                            <hr/>
                            <h1 class="nav justify-content-center" style={{color: 'white', }}> 
                            <span className="badge bg-danger"> Mira nadamas </span> </h1>
                            <br/>
                            <iframe width="95%" height="350px" src="https://www.youtube.com/embed/cGdWuDkFEUs" 
                                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                                gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <section style= {{ width: '50%', display: 'block', flexDirection: 'column' }} >
                            <hr/>
                            <h1 class="nav justify-content-center" style={{color: 'white', }}> 
                            <span className="badge bg-success"> No te lo puedes perder </span> </h1>
                            <h3> Arovecha el descuento </h3>
                            <p style={{ textAlign:'justify' }} > Las ideas que comunica un texto están contenidas en lo que se suele denominar 
                                «macroproposiciones», unidades estructurales de nivel superior o global, que otorgan 
                                coherencia al texto constituyendo su hilo central, el esqueleto estructural que cohesiona
                                elementos lingüísticos formales de alto nivel, como los títulos y subtítulos, la secuencia
                                párrafos, etc. En contraste, las «microproposiciones» son los elementos coadyuvantes de la 
                                coherencia al texto constituyendo su hilo central, el esqueleto estructural que cohesiona
                                elementos lingüísticos formales de alto nivel, como los títulos y subtítulos, la secuencia
                                párrafos, etc. En contraste, las «microproposiciones» son los elementos coadyuvantes de la 
                                coherencia al texto constituyendo su hilo central, el esqueleto estructural que cohesiona
                                elementos lingüísticos formales de alto nivel, como los títulos y subtítulos, la secuencia
                                párrafos, etc. En contraste, las «microproposiciones» son los elementos coadyuvantes de la 
                                cohesión de un texto, pero a nivel más particular o local. Esta distinción fue realizada 
                                por Teun van Dijk en 1980.1​ </p>
                        </section>
                    </div>

                    <hr/>
                    <h1 class="nav justify-content-center" style={{color: 'darkblue', }}> 
                    <span className="badge bg-warning"> Nuestros servicios </span> </h1>
                    <br/>
                    <GroupCard/>

                    <hr/>
                    <h1 class="nav justify-content-center" style={{color: 'white', }}> 
                    <span className="badge bg-danger"> Eventos </span> </h1>
                    <br/>
                    <GroupCard/>

                    <hr/>
                    <h1 class="nav justify-content-center" style={{color: 'white', }}> 
                    <span className="badge bg-info"> Lo mas visitado </span> </h1>
                    <br/>
                    <GroupCard/>

                   
                    
                </div>

                
            </div>
        )
    }
}
