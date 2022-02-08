import React from 'react';
import './Quizes.scss';
import QuizCard from "../../components/quizes/QuizCard";
import { Route, Routes } from "react-router-dom";
import QuizStart from "../quizstart/QuizStart";
import Quiz from "../quiz/Quiz";
import ShopItem from "../shopItem/ShopItem";

const Quizes = () => {

    return (
        <div className={"main__container--lesswidth"}>
            <Routes>
                <Route exact path={"/"} element={<div className={'info'}>
                    <h1>Quiz</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum leo ultricies pellentesque
                        dignissim. Adipiscing mi malesuada nunc, sit. Suscipit lectus nunc non sodales amet velit.
                        Tellus
                        euismod ultrices eu risus. </p>
                    <div className={'quizes'}>
                        <QuizCard name="Missions" />
                        <QuizCard name="Planets" />
                        <QuizCard name="Satellites" />
                        <QuizCard name="Astronauts" />
                    </div>
                </div>} />
                <Route path={"/:theme/start"} element={<QuizStart />} />
                <Route path={"/:theme/go"} element={<Quiz />} />
                <Route path={"/:item"} element={<ShopItem />} />
            </Routes>
        </div>
    )
};

export default Quizes;
