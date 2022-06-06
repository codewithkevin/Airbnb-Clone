import React from 'react';
import './Experience.css'


const Experience = (props) => {
    
    return (
        <div className="card-section">
            <img src={props.img} className="card-imgage" alt="..." />
            <div className="card--stats">
                <img src={props.star} className="card--star" alt="..." />
                <span>5.0</span>
                <span className="gray">{props.rating}</span>
                <span className="gray">{props.country}</span>
            
            </div>    
            <p>{props.title}</p>
            <p><span>From {props.prices}</span></p>
        </div>

    )
};

export default Experience;