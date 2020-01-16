
/* Example in Node.js ES6 using request-promise */
import {request} from 'request-promise';
import React, {Component,useState} from 'react';
import Weather from './Weather.js';
import cors from 'cors';
import './style.css';
import { FontAwesomeModule } from '@fortawesome/fontawesome-free';





class Crypto extends Component {

    
                        
    constructor(props) {
    ;
        super(props);
        this.state = { MwatAmout: 1,
                    priceUSD : 2,
                    Result : 1 
                };
        

        this._changeAmout = this._changeAmout.bind(this);
        //this._changePrice = this._changePrice.bind(this);


        
      }

      /*
      _changePrice(e) {
        if (e.target.validity.valid) {
          //var newPrice = e.target.value
          var newPrice = this.props.price
          this.setState({
              priceUSD: newPrice,
              Result: this.state.MwatAmout * newPrice,
              
            }); 
            console.log(newPrice);
        }}

        */
      
      
      _changeAmout(e) {
        if (e.target.validity.valid) {
          var newNum1 = e.target.value;
          var newPrice = this.props.price;
          this.setState({
              MwatAmout: newNum1,
              priceUSD: newPrice,
              Result: newNum1 * newPrice,
            }); 
        }
    }


    componentWillMount(){
        console.log('First this from crypto component');
    }

    componentDidMount(){
        
          console.log('Prix USD : ',this.state.priceUSD);
      }
        
      

            
             
//--------- fin constructor


    render() {
      return (

                    <div className="Cryptoform">
                         {this.getCrypto
                         }
                        response : 
                        the crypto Component
                    
                        <form className="Gen" onSubmit={this.getCrypto}>
                        <span className="formtext">&#x3C;Form /&#x3E;</span>
                            <p className="Fieldarea">MWAT Price <input type="float" name="price" placeholder={this.props.price} value={this.props.price}  /></p>
                            <p className="Fieldarea">MWAT Amount <input type="number" name="amout"   placeholder="Enter MWAT Amount.."   onChange={this._changeAmout}/></p>
                            <p className="Fieldarea">Total <input type="float" value={this.state.Result}></input></p>
                            <button className="ButtonC">Calculate</button>
                        </form>


                        

                    </div>

             )
        }
    }

export default Crypto;