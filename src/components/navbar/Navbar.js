import React from 'react';
import './Navbar.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
       <ul className="navbar">  
            <li className="nav-title">
                <a href="#">Logo</a>
            </li>
            <div className="nav-right">
                <li className="nav-title">  
                <NavLink to="/">Home</NavLink>  
                </li>  
                <li className="nav-title">  
                <NavLink to="/products">Products</NavLink>  
                </li>  
                <li className="nav-title">  
                <NavLink to="/login">Login</NavLink>  
                </li>   
            </div>
        </ul>  
    </header>
  )
}

export default Navbar