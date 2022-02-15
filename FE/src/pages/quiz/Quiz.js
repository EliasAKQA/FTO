import React, {useEffect, useState} from 'react';
import Img from'../../assets/quiz/NASA_logo.svg.png';
import {useParams} from "react-router-dom";
import './Quiz.scss';
import axios from 'axios';
import Url from 'config';

const Quiz = () => {

    let {id} = useParams();
    const [questions, setQuestions] = useState(null);

    useEffect(() => {
        axios.get(Url.UMBRACO_API + "/quiz/getquestions?id=" + id).then((res) => {
            // res.data.questions.map(data =>{
            //     console.log(data);
            // })
            console.log(res.data.questions);
            setQuestions(res.data.questions);
        })
    }, []);
    if (!questions) return <h3>Loading...</h3>
return (
    questions.map(q=>{

        return (
            <div className={'quiz'}>
                <h1>1/5</h1>
                <section className='text'>
                    <p className={'question'}>{q.question}</p>
                    <h2 className={' question questionmark'}>?</h2>
                    {/* <div className={'question__img'} style={{backgroundImage: `url("${Img}")`}}></div> */}
                    <img className={'question__img'} src={Img} alt="question-image"></img>
                </section>
                <section className={'answerOptions'}>
                    <form>
                        
                    </form>
                    <button className={'btn btn--primary'}>1972</button>
                    <button className={'btn btn--primary'}>1982</button>
                    <button className={'btn btn--primary'}>1962</button>
                    <button className={'btn btn--primary'}>1992</button>
                    <div className={'backSkip'}>
                    <button className={'btn btn--primary'}>Back</button>
                    <button className={'btn btn--primary'}>Skip</button>
                    </div>
                </section>
            </div>
        );
    })
)
};

export default Quiz;
