import React from 'react';
import landingRock from '../../assets/landingRock.svg';
import astronaut from '../../assets/astronaut.png';
import clock from '../../assets/clocks/clock.png';
import {ReactComponent as ClockSvg} from '../../assets/clocks/Clockanm.svg';
import {Link} from "react-router-dom";
import './Landing.scss';
import TimeForAction from "./TimeForAction";

// const TimeForAction = React.lazy(() => import('./TimeForAction'));

// window.addEventListener('DOMContentLoaded', init);

// function init(){
//     console.log(Clockanm.text());
//     // fetch(clockanm).then(r=>r.text()).then(text=>document.querySelector('.clock_con').insertAdjacentHTML("afterbegin", text));
// }
const Landing = () => {
    return (
        <div className={'landingpage main__container--fullwidth'}>
            <section className={'part1 main__container--lesswidth'}>
                <div className='landingWrapper'>
                    <h1>We Will Rock You</h1>
                    <div className={'clockanm'}></div>
                    <p>From the outer reaches of the galaxy right back into your home - our limted edition meteorites
                        are literally one of a kind.</p>
                    <img src={landingRock} alt='Rock' className={'rockImg'}/>
                    <Link to={'/shop'} className={'btn btn--primary'}>Shop now</Link>
                </div>
            </section>
            <div className='mid'>
                {/* <img src={MaskGroup} alt='transition' className={'cloud'}></img> */}
            </div>
            <section className={'part2 '}>
                <div className='landingWrapper main__container--lesswidth'>
                    <h1>Meet the team</h1>
                    <div className={'ast_con'}>
                        <img src={astronaut} className={'astronaut'} alt={"astronaut"}/>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo at montes, faucibus bibendum odio
                        orci cursus. At nulla elementum nisi bibendum. Eget nisl orci pellentesque aliquet urna, porta
                        vitae aliquam. Morbi scelerisque varius malesuada donec. Ullamcorper id.</p>
                    <Link to={'/crew'} className={'btn btn--secondary'}>Meet the team</Link>
                </div>
            </section>
            <section className={'part3 '}>
                <div className='landingWrapper main__container--lesswidth'>
                    <div className={'clock_con'}>
                        <ClockSvg/>
                        {/* <img src={clock} className={'clock'} alt={"clock"}/> */}
                    </div>
                    <h1>Time for action</h1>


                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis sit tortor egestas ultrices
                        nunc vitae, quis aenean fermentum. Sit egestas tellus nunc nunc aenean nisi. Mattis morbi nibh
                        et, non. </p>
                    <Link to={'/inventory'} className={'btn btn--secondary'}>See inventory</Link>
                </div>
            </section>
            {/*<section className={"part3"}>*/}
            {/*    <TimeForAction/>*/}
            {/*</section>*/}
            {/*<React.Suspense fallback={<div>Loading..</div>}>*/}
            {/*    <TimeForAction/>*/}
            {/*</React.Suspense>*/}
        </div>
    );
};

export default Landing;
