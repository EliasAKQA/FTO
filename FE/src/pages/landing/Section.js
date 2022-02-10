import React from "react";
import { Link } from "react-router-dom";
import Url from 'config';
import './Landing.scss';

function Section(props) {
    return (
        <section className={`part${props.index}`}>
            <div className={"main__container--lesswidth"}>
                <div className="landingWrapper">
                    <h1>{props.header}</h1>
                    <p>{props.description}</p>
                    <img src={Url.SERVER_URL + props.imageUrl} />
                    <Link className={"btn btn--primary"} to={props.button.url}>{props.button.content}</Link>
                </div>
            </div>
        </section >

    );
}

export default Section; 