import React, { useEffect, useState } from 'react';
import './Quizes.scss';
import QuizCard from "../../components/quizes/QuizCard";
import { Route, Routes } from "react-router-dom";
import QuizStart from "../quizstart/QuizStart";
import Quiz from "../quiz/Quiz";
import axios from 'axios';
import Url from 'config';

const Quizes = () => {

    useEffect(() => {
        document.title = "Quiz - Flight To Orbit";  
      }, []);

    const [themes, setThemes] = useState(null);

    useEffect(() => {
        axios.get(Url.SERVER_API + "/quiz/content").then((res) => {
            console.log(res.data);
            setThemes(res.data);
        })
    }, []);
    if (!themes) return <h3>Loading...</h3>

    return (
        <div className={"main__container--lesswidth"}>
            <Routes>
                <Route exact path={"/"} element={<div className={'info'}>
                    <h1>{themes.headline}</h1>
                    <p>{themes.text}</p>
                    <div className={'quizes'}>
                        {themes.themes.map(theme => {
                            return <QuizCard data={theme} key={theme.id} />
                        })}
                        {/* <QuizCard name="Planets" />
                        <QuizCard name="Satellites" />
                        <QuizCard name="Astronauts" /> */}
                    </div>
                </div>} />
                <Route path={"/:theme/:id/start"} element={<QuizStart />} />
                <Route path={"/:theme/:id/go"} element={<Quiz />} />
                {/* <Route path={"/:item"} element={<ShopItem />} /> */}
            </Routes>
        </div>
    )
};

export default Quizes;
