import React from 'react';
import './resource.scss';

const Resource = (props) => {
    return (
        <div className={"resource__wrapper"}>
            <div className={"resource__background"}>
                {props.type === "water" ?
                    <div className={"resource__foreground resource__foreground--water"}
                         style={{height: props.height}}>
                    </div> :
                    <div className={"resource__foreground resource__foreground--food"}
                         style={{height: props.height}}>
                    </div>
                }
            </div>
            <h3>{props.type}</h3>
        </div>
    );
};

export default Resource;
