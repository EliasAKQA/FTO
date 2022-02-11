import React from "react";
import { Link } from "react-router-dom";
import Url from 'config';

function Section(props) {
    return (
        <section>
            <h1>{props.name}</h1>
        </section>
    );
}

export default Section;