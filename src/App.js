import React, {Component} from 'react';
import './App.css';
import Navbar from './components/navbar/index.js';
import {BrowserRouter , Route } from 'react-router-dom';
import Crypto from './components/crypto/index.js';
import Weather from './components/crypto/Weather.js';
import Profile from './components/Profile/index.js';
import {request} from 'request-promise';



class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        da: 'Loading...',
        tempreature: 'Loading...',
        city : 'Loading...',
        rank : 'Loading...',
        humidity : 'Loading...',
        pressure: 'Loading...',
        description : 'Loading...',
        error : '',
        
    }
  }
  componentWillMount(){
    console.log('First this called');
    //{Crypto};

    //----------------

    const rp = require('request-promise');
            
            const requestOptions = {
                method: 'GET',
                uri: 'https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest',
                qs: {
                    'convert' : 'USD',
                    'symbol': 'BTC,MWAT',
      
                },
                headers: {
                    'X-CMC_PRO_API_KEY': '7ffcb16b-6558-4585-902d-544336095aac'
                },
                json: true,
                gzip: true
                };
      
    rp(requestOptions).then(response => {console.log('API call response => ', response )
                

    this.setState ({
        tempreature: 'Loading...',
        city : 'Loading...',
        rank : response.data['MWAT'].cmc_rank,
        humidity : response.data['MWAT'].id,
        pressure: response.data['MWAT'].name,
        description : response.data['MWAT'].slug,
        error : response.data['MWAT'].quote.USD.price,
        }
        );

        //console.log ('test');
    
    
    ;}).catch((err) => {
        console.log('API call error:', err.message); 
    
    });
    //-----------------
    
  }

  getData(){
    setTimeout(() => {
      console.log('Our data is fetched');
      this.setState({
        da: 'Hello WallStreet'
      })
    }, 10000)
  }

  componentDidMount(){
    this.getData();
  }


  render() {
    return (

     
      <BrowserRouter>
          <Navbar />
          
          <Crypto price={this.state.error}/>

          <Profile rank={this.state.rank} price={this.state.error}/>
          <Weather 
                                tempreature={this.state.tempreature}
                                city={this.state.city}
                                rank={this.state.rank}
                                humidity={this.state.humidity}
                                pressure={this.state.pressure}
                                description={this.state.description}
                                error={this.state.error}
                        />


      </BrowserRouter>
      
    )
  }

}

export default App;
