import React, {useEffect, useState} from 'react';
import Clock from "../../components/clock/Clock";
import './inventory.scss';
import Resource from "../../components/resource/Resource";
import {Link} from "react-router-dom";

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

    return (
        <div className='main__container--lesswidth '>
            <section className={"inventory__header"}>
                <h1>TIME FOR ACTION</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas magna ex, convallis et auctor sed,
                    lacinia tempus neque. </p>

            </section>
            <section className={"inventory__timer"}>
                <div>
                    <h2>TIME REMAINING</h2>
                    {time &&
                        <Clock initHour={time.hour} initMinute={time.minute} initSecond={time.second}/>
                    }
                </div>
            </section>
            <section className={"resource__container"}>
                <Resource height={"43%"} type={"food"}/>
                <Resource height={"55%"} type={"water"}/>
            </section>
            <Link to={"/shop"} className={"btn btn--primary "}>
                SHOP NOW
            </Link>
        </div>
    );
};

export default Inventory;
