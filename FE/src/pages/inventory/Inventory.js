import React, {useEffect, useState} from 'react';
import Clock from "../../components/clock/Clock";
import './inventory.scss';
import Resource from "../../components/resource/Resource";
import {Link} from "react-router-dom";
import axios from 'axios';
import Url from 'config';

const json = {milliseconds: 205204548}

const Inventory = () => {
    const [time, setTime] = useState(null);

    useEffect(() => {
        let seconds = Math.floor((json.milliseconds / 1000) % 60);
        let minutes = Math.floor(((json.milliseconds / 1000) / 60) % 60);
        let hours = Math.floor((((json.milliseconds / 1000) / 60) / 60));
        console.log(`seconds ${seconds} minutes ${minutes} hours: ${hours}`);
        setTime({
            hour: hours,
            minute: minutes,
            second: seconds
        })
    }, []);

    const [resources, setResources] = useState(null);

    useEffect(() => {
        axios.get(Url.UMBRACO_API + "/inventory/getinventorycontent").then((res) => {
            console.log(res);
            setResources(res.data);
        })
    }, []);

    if (!resources) return <h3>Loading...</h3>

    return (
        <div className='main__container--lesswidth '>
            <section className={"inventory__header"}>
                <h1>{resources.headline}</h1>
                <h2>{resources.subHeadline}</h2>
                <p>{resources.description}</p>


            </section>
            <section className={"inventory__timer"}>
                <h2>{resources.clock.headline}</h2>
                {time &&
                    <Clock initHour={time.hour} initMinute={time.minute} initSecond={time.second} clockData={resources.clock} />
                }
            </section>
            <section className={"resource__container"}>
                {resources.resource.map(resource =>{
                    console.log(resource);
                    return <Resource height={"70%"} type={resource.title} colour={resource.colourCode}/>
                })}
                {/* <Resource height={"43%"} type={"food"}/>
                <Resource height={"55%"} type={"water"}/> */}
            </section>
            <section className={'section-container'}>
                <h2>{resources.cto.headline}</h2>
                <p>{resources.cto.paragraphs[0].text}</p>
                <Link to={"/shop"} className={"btn btn--primary "}>
                    {resources.cto.buttonText}
                </Link>
            </section>
        </div>
    );
};

export default Inventory;
