import React from 'react';
import './Tracker.scss';
import Map from "../../components/map/Map";
import {Link} from 'react-router-dom';

const Tracker = () => {
    return (
        <div className={"main__container--lesswidth"}>
            <section className={"tracker__header"}>
                <h1>Tracker</h1>
            </section>
            <section>
                <Map/>
            </section>
            <section>
                <div className={"tracker__info"}>
                    <div>
                        <h3>Location</h3>
                        <p>1352352.435345, 234112.34457</p>
                    </div>
                    <div>
                        <h3>Speed</h3>
                        <p>7.66 km/s</p>
                    </div>
                    <div>
                        <h3>Timestamp</h3>
                        <p>2022/02/02 11:44</p>
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
