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
            setSections(res.data);
        })
    }, []);

    if (!sections) return <h1>Loading...</h1>
    return (
        <div className='main__container--fullwidth'>
            <div>{sections.description}</div>
            <Routes>
                <Route exact path={"/"} element={
                    <div>
                        <h1>Crew</h1>
                        <section className='main__container--lesswidth crew-page'>
                            <h2 className='crew-page__title'>Meet The Team</h2>
                            <p className='section-container__body'>Lorem, ipsum dolor sit amet consectetur adipisicing
                                elit. Dignissimos facere vero eveniet, quasi ex quo
                                ad laudantium at consequatur cum ipsum nam deleniti repellat adipisci consequuntur
                                dolorem repudiandae
                                voluptates modi?</p>
                        </section>
                        <div className='card-container'>
                            <CrewCard name="Raja Chari" title="lead astronaut" />
                            <CrewCard name="Kayla Barron" title="crew role" />
                            <CrewCard name="Matthias Maurer" title="crew role" />
                            <CrewCard name="Pyotr Dubrov" title="crew role" />
                        </div>
                    </div>
                } />
                <Route path={"/:member"} element={<CrewMember />} />
            </Routes>
            <hr />
            <section className='main__container--lesswidth crew-page'>
                <h2 className='crew-page__title'>Help us stay in space</h2>
                <p className='section-container__body'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
                    aliquid facilis illo maiores, blanditiis autem sint earum alias, magni consequuntur nemo voluptates
                    laborum aperiam? Corporis voluptates nisi a modi inventore.</p>
                <p className='section-container__body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                    nemo tenetur dolorum repellendus ex excepturi cumque suscipit perferendis asperiores molestiae
                    consectetur ab, nihil hic tempora distinctio ducimus quasi soluta! Ipsa.</p>
                <Link to={'/shop'} className={'btn btn--primary'}>Shop now</Link>
            </section>
        </div>
    );
};

export default Crew;

