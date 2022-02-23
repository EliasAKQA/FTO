import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import './QuizStart.scss';

const QuizStart = (props) => {
    let {theme, id} = useParams();

    useEffect(() => {
        document.title = "Quiz - Flight To Orbit";
    }, []);

    return (
        <div className='quizStart'>
            <Link to={'/quiz'} className={'backButton'}><h3>&#60; Back</h3></Link>
            <h2>You have chosen the theme {theme}</h2>
            <p>Click start to start the quiz, or go back to choose another theme</p>
            <Link to={'/quiz/' + theme + '/' + id + '/go'} className={'btn btn--primary'}>Start</Link>
        </div>
    );
};

export default QuizStart;