import React, { useEffect, useState } from 'react';
import './Crew.scss';
import CrewCard from "../../components/crewCard/CrewCard";
import CrewMember from "../crewMember/CrewMember";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import axios from 'axios';
import Url from 'config';

const Crew = () => {
    const [sections, setSections] = useState(null);

    useEffect(() => {
        axios.get(Url.UMBRACO_API + "/crew/getcrewcontent").then((res) => {
            console.log(res);
            setSections(res.data);
        })
    }, []);

    if (!sections) return <h1>Loading...</h1>

    return (
        <div className='main__container--fullwidth'>
            <h1>{sections.headline}</h1>
            <h2>{sections.subHeadline}</h2>
            <p>{sections.description}</p>
            <div className="card-container">
                {sections.crewMembers.map((content) => {
                    return <CrewCard name={content.name} role={content.role} profileImageUrl={content.profileImageUrl} />
                })}
            </div>
        </div>
    );
};

export default Crew;

