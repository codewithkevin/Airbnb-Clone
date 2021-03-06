import React from 'react';
import Hero from './Images/Group 77.png';

import './Hero.css';

const Herosection = () => {
    return (
        <div className="hero align-center">
            <img src={Hero} className="hero" alt="hero" />

            <h1 className="title">Online Experience</h1>
            <p className='text'>Join unique interactive activities
                led by one-of-a-kind hosts-all without 
                leaving home.
            </p>

            
        </div>
    );
}

export default Herosection;