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
            <section className='main__container--lesswidth crew-page'>
                <h2 className='crew-page__title'>{sections.subHeadline}</h2>
                <p>{sections.description}</p>
            </section>
            <div className="card-container">
                {sections.crewMembers.map((content) => {
                    return <CrewCard name={content.name} role={content.role} profileImageUrl={content.profileImageUrl} autographImageUrl={content.autographImageUrl}
                        desc={content.description} />
                })}
            </div>
        </div>
    );
};

export default Crew;

