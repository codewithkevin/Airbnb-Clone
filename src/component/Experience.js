import React from 'react';
import './Experience.css';


const Experience = (
    {
        img,
        star,
        name
    }
) => {
    
    return (
        <div className="card-section">
            <img src={img} className="card-image" alt="..." />
            <div className="card--stats">
                <img src={star} className="card--star" alt="..." />
                <span>5.0</span>
                <span className="gray">(6) .</span>
                <span className="gray">USA</span>
            
            </div>    
            <p>{name}</p>
            <p><span>From $136</span></p>
        </div>

    )
};

export default Experience;