import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="navbar navbar-expand-lg navbar-dark bg-dark" 
                    style={{height: 'auto', width:'100%', 
                    justifyContent: 'space-around', alignItems: 'center', 
                    display: 'flex', flexDirection:  'row' }}>

                <div className="card" style={{ width:'30rem', padding:'3px', margin:'3px' }} >
                    <div className="card text-center">
                        <div className="card-header bg-danger"> <h3 style={{ color:'whitesmoke', fontWeight:'bold' }}> Estamos Mejorando </h3> </div>
                        <div className="card-body">
                            <h5 className="card-title"> Para tu comodidad: </h5>
                            <p className="card-text"> Estamos trabajando para tu entera satisfaccion. </p>
                            <p className="card-text"> Espera una mejor experiencia de usuario en nuestro sitio. </p>
                        </div>
                    </div>
                </div>                

                <div className="card" style={{ width:'30rem', padding:'3px', margin:'3px', }} >
                    <div className="card text-center">
                        <div className="card-header  bg-warning"> <h3 style={{ color:'darkblue', fontWeight:'bold' }}> Siguenos </h3> </div>
                        <div className="card-body">
                            <h5 className="card-title"> Nuestras redes sociales: </h5>
                            <p className="card-text"> Instagram: Playa Maya Tours </p>
                            <p className="card-text"> Facebook: Playa Maya Tours </p>
                            <p className="card-text"> Twitter: Playa Maya Tours </p>
                            <p className="card-text"> YouTube: Playa Maya Tours </p>
                        </div>
                    </div>
                </div>

                <div className="card" style={{ width:'30rem', padding:'3px', margin:'3px' }} >
                    <div className="card text-center">
                        <div className="card-header bg-success"> <h3 style={{ color:'whitesmoke', fontWeight:'bold' }}> Playa Maya Tours </h3> </div>
                        <div className="card-body">
                            <h5 className="card-title"> Contacto: </h5>
                            <p className="card-text"> Telefono: (225) 1593578 </p>
                            <p className="card-text"> Celular: 2258527416 </p>
                            <p className="card-text"> Correo electronico: plamato@plamato.com </p>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
