import React, { useEffect, useState } from 'react';
import CrewInfoSection from "../../pages/crewMember/section";
import './CrewMember.scss';
import CrewMemberImage from "../../assets/crew/astronaut-raja-chari.jpg";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import Url from 'config';

const CrewMember = () => {
    let { id } = useParams();
    const [member, setMember] = useState(null);

    // get single member from api
    useEffect(() => {
        axios.get(Url.UMBRACO_API + "/crew/getCrewMemberDetails?id=" + id).then((res) => {
            console.log(res);
            setMember(res.data);
        })
    }, []);

    // check if item loaded
    if (!member) return <h1>Loadddddddddingggg...</h1>
    return (
        <div className='main__container--less-width'>
            <section className='crew-member'>
                <figure className='crew-member__image'>
                    <img src={Url.SERVER_URL + member.profileImageUrl} alt={member.name} />
                </figure>
                <div className='crew-member__text main__container--lesswidth'>
                    <h1>{member.name}</h1>
                    <h2>Job title</h2>
                    <p>{member.role}</p>
                    <h2>Personal Info</h2>
                    <p>{member.description}</p>
                </div>
                <div>
                    {member.infoSections.map((content) => {
                        return <CrewInfoSection title={content.title} content={content.content} />
                    })};
                </div>
            </section>
        </div>
    )
};

export default CrewMember;