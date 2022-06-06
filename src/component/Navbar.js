import React from "react";
import Logo from './Images/Airbnb_Logo_Bélo.svg.png'

import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={Logo} className="logo" alt="..." />
        </nav>
    )
}


export default Navbar;