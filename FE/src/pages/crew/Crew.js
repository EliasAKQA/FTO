import React, { useEffect, useState } from 'react';
import './Crew.scss';
import CrewCard from "../../components/crewCard/CrewCard";
import CrewMember from "../crewMember/CrewMember";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import axios from 'axios';
import Section from "./Section";
import Url from 'config';

const Crew = () => {
    const [sections, setSections] = useState(null);

    useEffect(() => {
        axios.get(Url.UMBRACO_API + "/crew/getcrewcontent").then((res) => {
            console.log(res);
            setSections(res.data.crewMembers);
        })
    }, []);

    if (!sections) return <h1>Loading...</h1>
    return (
        <div>
            {sections.map((content) => {
                return <Section name={content.name} />
            })}
        </div>
    );
};

export default Crew;

