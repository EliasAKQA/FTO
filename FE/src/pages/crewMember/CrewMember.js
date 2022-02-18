import React from 'react';
import './CrewMember.scss';
import CrewMemberImage from "../../assets/crew/astronaut-raja-chari.jpg";
import { Link, useParams } from "react-router-dom";

const CrewMember = () => {
    let { member } = useParams();

    return (
        <div className='main__container--less-width'>
            <section className='crew-member'>
                <figure className='crew-member__image'>
                    <img src={CrewMemberImage} alt="Crew member name" />
                </figure>
                <div className='crew-member__text main__container--lesswidth'>
                    <h1>{member}</h1>
                    <h2>Job title</h2>
                    <p>Lorem ipsum</p>
                    <h2>Personal Info</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptate repellendus iste in voluptatem accusantium illo, non at harum quasi, a sunt corporis debitis error, aut incidunt tempora molestias ratione.</p>

                </div>
            </section>
        </div>
    )
};

export default CrewMember;