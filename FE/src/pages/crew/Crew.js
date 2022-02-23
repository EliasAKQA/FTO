import React, { useEffect, useState } from 'react';
import './Crew.scss';
import CrewCard from "../../components/crewCard/CrewCard";
import axios from 'axios';
import Url from 'config';

const Crew = () => {
    const [sections, setSections] = useState(null);
    const [crew, setCrew] = useState(null);
    const [current, setCurrent] = useState(null);
    useEffect(() => {
        axios.get("http://api.open-notify.org/astros.json").then((res) => {
            console.log(res.data.people.filter(ast => ast.craft == "ISS"));
            setCrew(res.data.people.filter(ast => ast.craft == "ISS"));
        })
    }, []);

    useEffect(() => {
        axios.get(Url.SERVER_API + "/crew/content/").then((res) => {
            setSections(res.data);
            console.log(res.data.crewMembers);
        })
    }, []);

    if (!current) {
        if (crew && sections) {
            console.log('yes');
            console.log(sections.crewMembers);
            setCurrent(sections.crewMembers.filter(memberA => {
                return crew.find(memberB => {
                    return memberA.name === memberB.name;
                })
            }));
            console.log(current);
        }
    }

    if (!current) return <h1>Loading...</h1>

    return (
        <div className='main__container--fullwidth'>
            <title>Crew - Flight To Orbit</title>
            <h1>{sections.headline}</h1>
            <section className='main__container--lesswidth crew-page'>
                <h2 className='crew-page__title'>{sections.subHeadline}</h2>
                <p>{sections.description}</p>
            </section>
            <div className="card-container">
                {current.map((content) => {
                    return <CrewCard key={content.id} id={content.id} name={content.name} role={content.role} profileImageUrl={content.profileImageUrl} autographImageUrl={content.autographImageUrl}
                        desc={content.description} />
                })}
            </div>
        </div>
    );
};

export default Crew;

