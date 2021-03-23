import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/Navigation.js';
import Nosotros from './Views/Nosotros.js';
import Page from './Views/Page.js';
import Services from './Views/Services.js';
import Tours from './Views/Tours.js';
import Footer from './components/Footer.js';
import Navigate from './components/Navigate.js';

function App() {
  return (

    <Router>
      
      <Navigate/>

      <div className='fondoPage'>

            <div style={{ paddingTop: '78px' }}>

              <div>
                <Route path='/' exact component={Page} />
                <Route path='/nosotros' component={Nosotros} />
                <Route path='/servicios' component={Services} />
                <Route path='/tours' component={Tours} /> 
              </div>

              <hr/>

              <Footer/>
            </div>

      </div>

    </Router>
    
  );
}


export default App;
