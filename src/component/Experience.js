import React from 'react';
import './Experience.css'


const Experience = (props) => {

    let badge
    if (props.item.openSpots === 0) {
        badge = "Sold Out"
    }else if (props.item.location === 'Online') {
        badge = "Online"
    }

    let display 
    if (props.item.location !== 'Online') {
        display = props.item.location
    } else if (props.item.location === 'Online') {
        display = null
    }
    
    
    return (
        <div className="card-section">
            {badge && <div className="card--badge">{badge}</div>}
            {display && <div className="card--badge1">{display}</div>}
            <img src={props.item.img} className="card--image" alt="..." />
            <div className="card--stats">
                <img src={props.item.star} className="card--star" alt="..." />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) •</span>
                <span className="gray">{props.item.location}</span>
            
            </div>    
            <p className="card--title">{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
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