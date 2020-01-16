import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';
//import logo from './logo.png';


const Navbar = () => {

    return(
        
        <div className="navbar">
            
            <div className="container">
                
                <div className="logo">
                    <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" />
                    
                </div>
                
                <ul className="ul-list">
                    <li className="list-item"><Link to="/">Home</Link></li>
                    <li className="list-item"><a href="#">Work</a></li>
                    <li className="list-item"><a href="#">Portfolio</a></li>
                    <li className="list-item"><a href="#">Resume</a></li>
                    <li className="list-item"><Link to="/Contact">Contact</Link></li>
                </ul>
                
            </div>
        </div>

    )

}

export default Navbar;