import React, {useEffect, useState} from 'react';
import './Tracker.scss';
import Map from "../../components/map/Map";
import Leaflet from "../../components/map/Leaflet";
import {Link} from 'react-router-dom';


const Tracker = () => {
    const [position, setPosition] = useState({lat:'loading', lng:'loading', timestamp:'loading'});
    
    const data_pull = (data) => {
        setPosition({lat: data.lat,
                    lng: data.lng,
                    timestamp: Date(data.timestamp)})
    }

    return (
        <div className={"main__container--lesswidth"}>
            <title>Tracker - Flight To Orbit</title>
            <section className={"tracker__header"}>
                <h1>Tracker</h1>
            </section>
            {/* <section>
                <Map/>
            </section> */}
            <section>
                <Leaflet func={data_pull}/>
            </section>
            <section>
                <div className={"tracker__info"}>
                    <div>
                        <h3>Location</h3>
                        <p>{position.lat}, {position.lng}</p>
                    </div>
                    <div>
                        <h3>Speed</h3>
                        <p>7.66 km/s</p>
                    </div>
                    <div>
                        <h3>Timestamp</h3>
                        <p>{position.timestamp}</p>
                    </div>
                </div>
            </section>
            <section className='section-container'>
                <h2>Who is up there?</h2>
                <p>There are constantly missions going to the ISS. Each missions lasts about six months! If you are
                    interested in seeing who is up there at this moment go to our crew page.</p>
                <Link className={'btn btn--primary'} to={'/crew'}>Go to crew page</Link>
            </section>
        </div>
    );
};

export default Tracker;
