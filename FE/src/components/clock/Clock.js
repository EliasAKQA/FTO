import React, {useEffect, useState} from 'react';
import './clock.scss';


const Clock = (props) => {
    const [clock, setClock] = useState({hour: props.initHour, minute: props.initMinute, second: props.initSecond});

    function tick() {
        setClock((prev) => {
            let localClock = {hour: prev.hour, minute: prev.minute, second: prev.second};
            if (prev.second < 1) {
                localClock.second = 59;
                if (prev.minute < 1) {
                    localClock.hour = prev.hour - 1;
                    localClock.minute = 59;
                } else localClock.minute = prev.minute - 1;
            } else localClock.second = prev.second - 1;
            return localClock;
        })
    }

    useEffect(() => {
        const timer = setInterval(() => {
            tick();
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className={"clock__timer"}>
            <p>{clock.hour < 10 ? "0" + clock.hour : clock.hour}</p>
            <p>{clock.minute < 10 ? "0" + clock.minute : clock.minute}</p>
            <p>{clock.second < 10 ? "0" + clock.second : clock.second}</p>
            <h4>HOUR</h4>
            <h4>MIN</h4>
            <h4>SEC</h4>
            {/*<div*/}
            {/*    className={"clock__timer"}>{clock.hour < 10 ? "0" + clock.hour : clock.hour} : {clock.minute < 10 ? "0" + clock.minute : clock.minute} : {clock.second < 10 ? "0" + clock.second : clock.second}*/}
            {/*</div>*/}
        </div>
    )
}

export default Clock;
