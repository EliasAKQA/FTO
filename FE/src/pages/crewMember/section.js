import React from 'react';

const CrewInfoSection = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    )
};

export default CrewInfoSection;