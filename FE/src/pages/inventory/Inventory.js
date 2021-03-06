import React, {useEffect, useState} from 'react';
import Clock from "../../components/clock/Clock";
import './inventory.scss';
import Resource from "../../components/resource/Resource";
import {Link} from "react-router-dom";
import axios from 'axios';
import Url from 'config';
import LoadingScreen from "../../components/loading/LoadingScreen";

const Inventory = () => {
    const [time, setTime] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        document.title = "Inventory - Flight To Orbit";

        if (!data) {
            axios.get(Url.SERVER_API + "/inventory/content").then((res) => {
                setData(res.data);
                let ms = res.data.resource.millisecondsToDeath;
                let seconds = Math.floor((ms / 1000) % 60);
                let minutes = Math.floor(((ms / 1000) / 60) % 60);
                let hours = Math.floor((((ms / 1000) / 60) / 60));
                setTime({
                    hour: hours,
                    minute: minutes,
                    second: seconds
                })
            })
        }
    }, [data]);

    if (!data) return <LoadingScreen/>
    return (
        <div className='main__container--lesswidth '>
            <section className={"inventory__header"}>
                <h1>{data.headline}</h1>
                <h2>{data.subHeadline}</h2>
                <p>{data.description}</p>
            </section>
            <section className={"inventory__timer"}>
                <h2>{data.clock.headline}</h2>
                {time &&
                    <Clock initHour={time.hour} initMinute={time.minute} initSecond={time.second}
                           clockData={data.clock}/>
                }
            </section>
            <section className={"resource__container"}>
                {data.resource.resources.map(resource => {
                    return <Resource key={resource.title} height={`${resource.amount}%`} type={resource.title}
                                     colour={resource.colourCode}/>
                })}
            </section>
            <section className={'section-container'}>
                <h2>{data.cto.headline}</h2>
                <p>{data.cto.paragraphs[0].text}</p>
                <Link to={"/shop"} className={"btn btn--primary "}>
                    {data.cto.buttonText}
                </Link>
            </section>
        </div>
    );
};

export default Inventory;
