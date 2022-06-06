import React from 'react';



const Experience = (props) => {
    return (
        <div className="card-section">
            <img src={props.img} className="card-image" alt="..." />
            <div className="card--stats">
                <img src={props.star} className="card--star" alt="..." />
                <span>5.0</span>
                <span className="gray">(6) .</span>
                <span className="gray">USA</span>
            
            </div>    
            <p>{props.name}</p>
            <p><span>From $136</span></p>
        </div>

    )
};

export default Experience;