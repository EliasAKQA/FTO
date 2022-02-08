import React from 'react';
import {Link} from "react-router-dom";
import './Landing.scss';
import AnalogueClock from "../../components/clock/AnalogueClock";

const TimeForAction = () => {
    return (
        <div className='landingWrapper main__container--lesswidth'>
            <h1>Time for action</h1>
            <div className={'clock_con'}>
                <AnalogueClock/>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis sit tortor egestas ultrices
                nunc vitae, quis aenean fermentum. Sit egestas tellus nunc nunc aenean nisi. Mattis morbi nibh
                et, non. </p>
            <Link to={'/inventory'} className={'btn btn--secondary'}>See inventory</Link>
        </div>
    );
};

export default TimeForAction;
