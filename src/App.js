import React, {Component} from 'react';
import './App.css';
import Navbar from './components/navbar/index.js';
import {BrowserRouter , Route } from 'react-router-dom';
import Crypto from './components/crypto/index.js';
import Weather from './components/crypto/Weather.js';
import Profile from './components/Profile/index.js';

import Contact from './components/Contact/index.js';
import Kucoin from './components/kucoin/index.js';
import Home from './components/home/index.js'



class App extends Component {

  

  render() {
    return (

      
      <BrowserRouter>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/BuyMwat' component={Kucoin}/>
          <Route path='/Contact' component={Contact} />
          

      </BrowserRouter>
      
    )
  }

}

export default App;
