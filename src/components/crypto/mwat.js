import {request} from 'request-promise';
import React, {Component} from 'react';


const CoinMarketCap = require('coinmarketcap-api')
 
const apiKey = '7ffcb16b-6558-4585-902d-544336095aac'
const client = new CoinMarketCap(apiKey)
 
client.getTickers().then(console.log).catch(console.error)
client.getGlobal().then(console.log).catch(console.error)

client.getMetadata({symbol: ['BTC', 'ETH']}).then(console.log).catch(console.error)