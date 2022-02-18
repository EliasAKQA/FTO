import React, { useEffect, useState } from 'react';
import InfoSection from "../../components/sections/InfoSection";
import './CrewMember.scss';
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
    if (!member) return <h1>Loading ...</h1>
    return (
        <div className='main__container--less-width'>
            <section className='crew-member'>
                <figure className='crew-member__image'>
                    <img src={Url.SERVER_URL + member.profileImageUrl} alt={member.name} />
                </figure>
                <div className='crew-member__text main__container--lesswidth'>
                    <h1 className='crew-member__text--title'>{member.name}</h1>
                    <p>{member.description}</p>
                    <div>
                        {member.infoSections.map((content, index) => {
                            return <InfoSection key={index} title={content.title} content={content.content} />
                        })};
                    </div>
                </div>
            </section>
        </div>
    )
};

export default CrewMember;