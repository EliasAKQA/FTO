import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import Url from 'config';
import './Landing.scss';
import { ReactSVG } from 'react-svg';

function Section(props) {
    return (
        <section className={`part${props.index}`}>
            <div className="landingWrapper main__container--lesswidth">
                <h1>{props.header}</h1>
                <p>{props.description}</p>
                <div className={`part${props.index}--img`}>
                    {props.index == 3 ? (
                        <ReactSVG src={Url.UMBRACO_SERVER + props.imageUrl} />
                    ) : (
                        <img src={Url.UMBRACO_SERVER + props.imageUrl} />
                    )}
                </div>
                <Link className={"btn btn--primary"} to={props.button.url}>{props.button.content}</Link>
            </div>
        </section>
    );
}

export default Section; 