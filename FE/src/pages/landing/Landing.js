import React, {useEffect, useState} from 'react';
import './Landing.scss';
import axios from 'axios';
import Section from "./Section";
import Url from 'config';
import LoadingScreen from "../../components/loading/LoadingScreen";

const Landing = () => {
    const [sections, setSections] = useState(null);

    useEffect(() => {
        document.title = "Flight To Orbit";
    }, []);


    useEffect(() => {
        if (!sections) {
            axios.get(Url.SERVER_API + "/home/content").then((res) => {
                console.log(res);
                setSections(res.data.sections);
            })
        }
    }, [sections]);

    if (!sections) return <LoadingScreen/>
    return (
        <div className='landingpage main__container--fullwidth'>
            {sections.map((content, index) => {
                return <Section key={index} index={(index + 1) % 4} header={content.header}
                                description={content.description}
                                imageUrl={content.imageUrl} button={content.button}/>
            })}
        </div>
    );
};

export default Landing;
