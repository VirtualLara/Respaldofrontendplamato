import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navigation.css';

import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/logo.jpeg';

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light sticky-top " 
                style={{ background: '#2E86C1', fontWeight:'bold', fontSize: '20px' }} >
                <div className="container">
                    <Link className="navbar-brand navbarHover borderLinkLogo" to="/" > 
                            <img src={ logo } className='logo' /> 
                    </Link>
                    <Link className="namePlamato" to="/" > Playa Maya "Tours" </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/" > Inicio </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/tours" > Tours </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/servicios" > Servicios </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/nosotros" > Nosotros </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/"> lista </Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        )
    }
}
