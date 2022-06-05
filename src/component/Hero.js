import React from 'react';
import Hero from './images/Group 77.png';

import './Hero.css';

const Herosection = () => {
    return (
        <div className="hero align-center">
            <img src={Hero}  alt="hero" />

            <h1>Online Experience</h1>
            <p>Join unique interactive activities
                led by one-of-a-kind hosts-all without 
                leaving home.
            </p>

            
        </div>
    );
}

export default Herosection;