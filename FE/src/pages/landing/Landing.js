import React, { useEffect, useState } from 'react';
import landingRock from '../../assets/landingRock.svg';
import astronaut from '../../assets/astronaut.png';
import clock from '../../assets/clocks/clock.png';
import { ReactComponent as ClockSvg } from '../../assets/clocks/Clockanm.svg';
import { Link } from "react-router-dom";
import './Landing.scss';
import TimeForAction from "./TimeForAction";
import axios from 'axios';
import { Config } from "config";
import Section from "./Section";

const Landing = () => {
    const [sections, setSections] = useState(null);

    useEffect(() => {
        axios.get(Config.UMBRACO_URL + "/home/gethomecontent").then((res) => {
            console.log(res);
            setSections(res.data.sections);
        })
    }, []);

    if (!sections) return <h1>Loading...</h1>
    return (
        <div className='landingpage main__container--fullwidth'>
            {sections.map((content, index) => {
                return <Section key={index} index={index + 1} header={content.header} description={content.description} imageUrl={content.imageUrl} button={content.button} />
            })}
        </div>
        // <div className={'landingpage main__container--fullwidth'}>
        //     <section className={'part1 main__container--lesswidth'}>
        //         <div className='landingWrapper'>
        //             <h1>We Will Rock You</h1>
        //             <div className={'clockanm'}></div>
        //             <p>From the outer reaches of the galaxy right back into your home - our limted edition meteorites
        //                 are literally one of a kind.</p>
        //             <img src={landingRock} alt='Rock' className={'rockImg'} />
        //             <Link to={'/shop'} className={'btn btn--primary'}>Shop now</Link>
        //         </div>
        //     </section>
        //     <div className='mid'>
        //         {/* <img src={MaskGroup} alt='transition' className={'cloud'}></img> */}
        //     </div>
        //     <section className={'part2 '}>
        //         <div className='landingWrapper main__container--lesswidth'>
        //             <h1>Meet the team</h1>
        //             <div className={'ast_con'}>
        //                 <img src={astronaut} className={'astronaut'} alt={"astronaut"} />
        //             </div>
        //             <p>Who is currently up there?
        //                 Missions to the space station occure every six months where new crew members get on board. Check out who is in the station right now and find out more about them!
        //             </p>
        //             <Link to={'/crew'} className={'btn btn--secondary'}>Meet the team</Link>
        //         </div>
        //     </section>
        //     <section className={'part3 '}>
        //         <div className='landingWrapper main__container--lesswidth'>
        //             <div className={'clock_con'}>
        //                 <ClockSvg />
        //                 {/* <img src={clock} className={'clock'} alt={"clock"}/> */}
        //             </div>
        //             <h1>Time for action</h1>


        //             <p>Food and water are constantly used on the station, but there is only enough for a limited amount of time. Check out the food and water inventory on the station and help out in restocking! </p>
        //             <Link to={'/inventory'} className={'btn btn--secondary'}>See inventory</Link>
        //         </div>
        //     </section>
        //     {/*<section className={"part3"}>*/}
        //     {/*    <TimeForAction/>*/}
        //     {/*</section>*/}
        //     {/*<React.Suspense fallback={<div>Loading..</div>}>*/}
        //     {/*    <TimeForAction/>*/}
        //     {/*</React.Suspense>*/}
        // </div> 
    );
};

export default Landing;
