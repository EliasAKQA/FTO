import React from "react";
import { Link } from "react-router-dom";
import Url from 'config';
import './Landing.scss';

function Section(props) {
    return (
        <section className={`part${props.index}`}>
                <div className="landingWrapper main__container--lesswidth">
                    <h1>{props.header}</h1>
                    <p>{props.description}</p>
                    <div className={`part${props.index}--img`}>
                        <img src={Url.SERVER_URL + props.imageUrl} />
                    </div>
                    <Link className={"btn btn--primary"} to={props.button.url}>{props.button.content}</Link>
                </div>
        </section >
    );
}

export default Section; 