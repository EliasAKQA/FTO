import React, {useEffect, useState} from 'react';
import './Quizes.scss';
import QuizCard from "../../components/quizes/QuizCard";
import {Route, Routes} from "react-router-dom";
import QuizStart from "../quizstart/QuizStart";
import Quiz from "../quiz/Quiz";
import axios from 'axios';
import Url from 'config';
import LoadingScreen from "../../components/loading/LoadingScreen";

const Quizes = () => {
    const [themes, setThemes] = useState(null);
 
    useEffect(() => {
        document.title = "Quiz - Flight To Orbit";
    }, []);

    useEffect(() => {
        if (!themes) {
            axios.get(Url.SERVER_API + "/quiz/content").then((res) => {
                setThemes(res.data);
            })
        }
    }, [themes]);

    if (!themes) return <LoadingScreen/>
    return (
        <div className={"main__container--lesswidth"}>
            <Routes>
                <Route exact path={"/"} element={<div className={'info'}>
                    <h1>{themes.headline}</h1>
                    <p>{themes.text}</p>
                    <div className={'quizes'}>
                        {themes.themes.map(theme => {
                            return <QuizCard data={theme} key={theme.id}/>
                        })}
                    </div>
                </div>}/>
                <Route path={"/:theme/:id/start"} element={<QuizStart/>}/>
                <Route path={"/:theme/:id/go"} element={<Quiz/>}/>
            </Routes>
        </div>
    )
};

export default Quizes;
