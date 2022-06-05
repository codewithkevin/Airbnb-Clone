import React from 'react';
import Hero from './images/Group 77.png';

import './Hero.css';

const Herosection = () => {
    return (
        <div className="hero">
            <img src={Hero} alt="hero" />
        </div>
    );
}

export default Herosection;