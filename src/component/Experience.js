import React from 'react';
import './Experience.css'


const Experience = (props) => {
    
    return (
        <div className="card-section">
            <img src={props.img} className="card--image" alt="..." />
            <div className="card--stats">
                <img src={props.star} className="card--star" alt="..." />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) •</span>
                <span className="gray">{props.location}</span>
            
            </div>    
            <p className="card--title">{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>

        // <img src={`../images/${props.img}`} className="card--image" />
        // <div className="card--stats">
        //     <img src="../images/star.png" className="card--star" />
        //     <span>{props.rating}</span>
        //     <span className="gray">({props.reviewCount}) • </span>
        //     <span className="gray">{props.location}</span>
        // </div>
        // <p>{props.title}</p>
        // <p><span className="bold">From ${props.price}</span> / person</p>

    )
};

export default Experience;