import React, { useEffect, useState } from 'react';
import InfoSection from "../../components/sections/InfoSection";
import './CrewMember.scss';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import Url from 'config';
import LoadingScreen from "../../components/loading/LoadingScreen";

const CrewMember = () => {
    let { ids } = useParams();
    const [member, setMember] = useState(null);
    const [shopItems, setShopItems] = useState(null);
    const [memberItems, setMemberItems] = useState(null);

    useEffect(() => {
        document.title = "Crew Member - Flight To Orbit";
    }, []);

    // get shop items
    useEffect(() => {
        if (!shopItems) {
            axios.get(Url.SERVER_API + "/shop/content").then((res) => {
                console.log(res.data.shopItems);
                setShopItems(res.data.shopItems);
            })
        }
        if (!member) {
            axios.get(Url.SERVER_API + "/crew/content?id=" + ids).then((res) => {
                console.log(res);
                setMember(res.data);
            })
        }
        if (member && shopItems) setShopItems(shopItems.filter(e => e.discoverer.id === member.id));
    }, [shopItems, member]);


    // check if item loaded
    if (!member) return <LoadingScreen />
    return (
        <div className='main__container--less-width'>
            <section className='crew-member'>
                <figure className='crew-member__image'>
                    <img src={Url.UMBRACO_SERVER + member.profileImageUrl} alt={member.name} />
                </figure>
                <div className='crew-member__text main__container--lesswidth'>
                    <h1 className='crew-member__text--title'>{member.name}</h1>
                    <p>{member.description}</p>
                    <div>
                        {member.infoSections.map((content, index) => {
                            return <InfoSection key={index} title={content.title} content={content.content} />
                        })}
                    </div>
                    {/*                     <Link className='btn btn--primary' to={'/shop/filter/' + id}>{member.name} collection</Link> */}
                    <h1>test</h1>
                    <div>{shopItems.map((content) => {
                        return <div>{content.title}</div>
                    })}</div>
                </div>
            </section>
        </div>
    )
};

export default CrewMember;