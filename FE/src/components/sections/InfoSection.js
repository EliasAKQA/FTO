import React from 'react';
import "./infoSection.scss";

const InfoSection = (props) => {
    return (
        <div className='container__section'>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    )
};

export default InfoSection;