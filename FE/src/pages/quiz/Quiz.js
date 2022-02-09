import React from 'react';
import Img from'../../assets/quiz/NASA_logo.svg.png';
import './Quiz.scss';

const Quiz = () => {
    return (
        <div className={'quiz'}>
            <h1>1/5</h1>
            <div className='text'>
                <p className={'question'}>when was the last apollo mission?</p>
                <h2 className={' question questionmark'}>?</h2>
                {/* <div className={'question__img'} style={{backgroundImage: `url("${Img}")`}}></div> */}
                <img className={'question__img'} src={Img} alt="question-image"></img>
            </div>
            <div className={'answerOptions'}>
                <button className={'btn btn--primary'}>1972</button>
                <button className={'btn btn--primary'}>1982</button>
                <button className={'btn btn--primary'}>1962</button>
                <button className={'btn btn--primary'}>1992</button>
                <div className={'backSkip'}>
                <button className={'btn btn--primary'}>Back</button>
                <button className={'btn btn--primary'}>Skip</button>
                </div>
            </div>
        </div>
    );
};

export default Quiz;
