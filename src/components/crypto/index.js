
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
                    Result : 1,
                    KWTAmount : 0.11,
                    KWTPrice : 0.057,
                    KWTMonthly: 0,
                    KWTYearly: 0, 
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
          var year = this.state.KWTPrice * newNum1
          var month = year / 12
          this.setState({
              MwatAmout: newNum1,
              priceUSD: newPrice,
              Result: newNum1 * newPrice,
              KWTAmount : newNum1 * 0.11,
              KWTPrice : 0.057,
              KWTMonthly: month,
              KWTYearly: year,
            }); 
            
            

        }
    }


    componentWillMount(){
        console.log('First this from crypto component');
    }

    componentDidMount(){
      var newPrice = this.props.price;
      this.setState({
          MwatAmout: 1,
          priceUSD: newPrice,
          Result: 1 * newPrice,
          KWTAmount : 1 * 0.11,
        }); 
        
          console.log('Prix USD : ',this.state.priceUSD);
      }
        
      

            
             
//--------- fin constructor


    render() {
      return (

                    <div className="Cryptoform">
                    
                    <div className="textstaking">
                    The Energy Community Fund represents a pool of KWT (in the amount of 5% of the total energy produced in the RED platform) which will be distributed to MWAT holders based on their ratio between their amount of MWAT and the total amount of MWAT staked.
                    <p></p>
                    </div>
                        
                        <form className="Gen" onSubmit={this.getCrypto}>


                        <table>
                              <tr>
                                  <td>
                                      <p className="Fieldarea">MWAT Price <input className="inputzone" type="float" name="price" placeholder={this.props.price} value={this.props.price}  /></p>
                                      <p className="Fieldarea">MWAT Amount <input className="inputzone"  type="number" name="amout"   placeholder="Enter MWAT Amount.."   onChange={this._changeAmout}/></p>
                                      <p className="Fieldarea">Total (USD)<input className="inputzone"  type="float" value={this.state.Result}></input></p>
                                      <div><p className="Fieldarea">KWT Generated<input className="inputzone"  type="float" value={this.state.KWTAmount}></input></p></div>
                                      <button className="ButtonC">Refresh</button>
                                  </td>

                                  <td> </td>

                                    <td>
                                      <p className="Fieldarea">KWT Price <input className="inputzone" type="float" name="price" placeholder="0.057" value={this.state.KWTPrice}  /></p>
                                      <p className="Fieldarea">Monthly KWT Reward (USD)<input className="inputzone"  type="number" name="amout"   value={this.state.KWTMonthly}/></p>
                                      <p className="Fieldarea">Annualy KWT Reward (USD)<input className="inputzone"  type="float" value={this.state.KWTYearly}></input></p>
                                      <p className="Fieldarea">2022  kk never<input className="inputzone"  type="float" value={this.state.KWTAmount}></input></p>
                                      
                                    </td>
                              </tr>
                              
                            </table>


                        
                        </form>


                        
                        

                    </div>
                    
      

             )
        }
    }

export default Crypto;