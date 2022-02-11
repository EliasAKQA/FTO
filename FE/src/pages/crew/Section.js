import React from "react";
import { Link } from "react-router-dom";
import Url from 'config';

function Section(props) {
    return (
        <section>
            <h1>{props.name}</h1>
            <p>{props.role}</p>
            <div><img src={Url.SERVER_URL + props.profileImageUrl} alt="" /></div>
        </section>
    );
}

export default Section;