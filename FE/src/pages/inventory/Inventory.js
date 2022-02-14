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
                <h1>Inventory</h1>
                <h2>TIME FOR ACTION</h2>
                <p>Resources like food and water are constantly being used by the crew on the ISS. That is why the
                    staion needs to be restocked. Here you can see how much food and water is currently lrft on the ISS
                    and for how long the crew can last with that amount.</p>


            </section>
            <section className={"inventory__timer"}>
                <h2>TIME REMAINING</h2>
                {time &&
                    <Clock initHour={time.hour} initMinute={time.minute} initSecond={time.second}/>
                }
            </section>
            <section className={"resource__container"}>
                <Resource height={"43%"} type={"food"}/>
                <Resource height={"55%"} type={"water"}/>
            </section>
            <section className={'section-container'}>
                <h2>What to help the crew out?</h2>
                <p>We are selling meteoriters found and signed by our astronauts at our shop! The money we make by
                    selling these meteorites is then used to resupply the ISS with the neccessary resources they
                    need.</p>
                <Link to={"/shop"} className={"btn btn--primary "}>
                    SHOP NOW
                </Link>
            </section>
        </div>
    );
};

export default Inventory;
