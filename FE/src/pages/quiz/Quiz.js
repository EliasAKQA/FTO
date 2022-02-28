import React, {useEffect, useState} from 'react';
import Img from '../../assets/quiz/NASA_logo.svg.png';
import {useParams, Link} from "react-router-dom";
import './Quiz.scss';
import axios from 'axios';
import Url from 'config';
import LoadingScreen from "../../components/loading/LoadingScreen";

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [questions, setQuestions] = useState(null);
    let {id} = useParams();

    useEffect(() => {
        document.title = "Quiz - Flight To Orbit";
    }, []);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    useEffect(() => {
        if (!questions) {
            axios.get(Url.SERVER_API + "/quiz/content?id=" + id).then((res) => {
                setQuestions(res.data.questions);
            })
        }
    }, [questions]);
    let num = 0;
 
    if (!questions) return <LoadingScreen/>
    return (
        <div>
            {showScore ? (
                <div className={'score'}>
                    <h3>You answered {score} out of {questions.length} correctly.</h3>
                    <button className={'btn btn--primary'} onClick={() => {
                        setCurrentQuestion(0);
                        setScore(0);
                        setShowScore(false)
                    }}>Try again!
                    </button>
                    <Link to={'/quiz'} className={'btn btn--primary'}>Choose another theme</Link>
                </div>
            ) : (
                <div className={'quiz'} key={questions[currentQuestion].id}>
                    <h1>{currentQuestion + 1}/{questions.length}</h1>
                    <section className='text'>
                        <p className={'question'}>{questions[currentQuestion].question}</p>
                        <h2 className={' question questionmark'}>?</h2>
                        {/* <div className={'question__img'} style={{backgroundImage: `url("${Img}")`}}></div> */}
                        <img className={'question__img'} src={Url.UMBRACO_SERVER + questions[currentQuestion].imageUrl} alt="question-image"></img>
                    </section>
                    <section className={'answerOptions'}>
                        {questions[currentQuestion].answers.map(answer => {
                            return (
                                <button key={answer.id} className='btn btn--primary'
                                        onClick={() => handleAnswerOptionClick(answer.isCorrect)}>{answer.answer}</button>
                            );
                        })}
                    </section>
                </div>
            )}
        </div>
    )
};

export default Quiz;
