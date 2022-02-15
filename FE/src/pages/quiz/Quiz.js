import React, {useEffect, useState} from 'react';
import Img from'../../assets/quiz/NASA_logo.svg.png';
import {useParams} from "react-router-dom";
import './Quiz.scss';
import axios from 'axios';
import Url from 'config';

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

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
    let num = 0;
    if (!questions) return <h3>Loading...</h3>
    return (
        <div>
            {showScore ? (
                <div className={'score'}>
                    <p>You answered {score} out of {questions.length} correctly.</p>
                    <button className={'btn btn--primary'} onClick={()=> {setCurrentQuestion(0); setScore(0); setShowScore(false) }}>Try again!</button>
                </div>
            ) : (
                <div className={'quiz'} key={questions[currentQuestion].id}>
                <h1>{currentQuestion + 1}/{questions.length}</h1>
                <section className='text'>
                    <p className={'question'}>{questions[currentQuestion].question}</p>
                    <h2 className={' question questionmark'}>?</h2>
                    {/* <div className={'question__img'} style={{backgroundImage: `url("${Img}")`}}></div> */}
                    <img className={'question__img'} src={Img} alt="question-image"></img>
                </section>
                <section className={'answerOptions'}>
                        {questions[currentQuestion].answers.map(answer => {
                            return(
                                <button key={answer.id} className='btn btn--primary' onClick={()=> handleAnswerOptionClick(answer.isCorrect) }>{answer.answer}</button>
                            );
                        })}
                </section>
            </div>
            )}
        </div>





    // questions.map(q=>{
    //     num++;
    //     return (

    //         <div className={'quiz'}>
    //             <h1>{num}/{questions.length}</h1>
    //             <section className='text'>
    //                 <p className={'question'}>{q.question}</p>
    //                 <h2 className={' question questionmark'}>?</h2>
    //                 {/* <div className={'question__img'} style={{backgroundImage: `url("${Img}")`}}></div> */}
    //                 <img className={'question__img'} src={Img} alt="question-image"></img>
    //             </section>
    //             <section className={'answerOptions'}>
    //                 <form>
    //                     {q.answers.map(answer => {
    //                         return(
    //                             <div>
    //                                 <input type={'radio'} name={q.id} id={answer.id} className={'hidden'}></input>
    //                                 <label key={answer.id} className={'btn btn--primary'} for={answer.id}>
    //                                     <i>{answer.answer}</i>
    //                                 </label>
    //                             </div>
    //                         );
    //                     })}
    //                 </form>
    //                 {/* <button className={'btn btn--primary'}>1972</button>
    //                 <button className={'btn btn--primary'}>1982</button>
    //                 <button className={'btn btn--primary'}>1962</button>
    //                 <button className={'btn btn--primary'}>1992</button> */}
    //                 <div className={'backSkip'}>
    //                 <button className={'btn btn--primary'}>Back</button>
    //                 <button className={'btn btn--primary'}>Next</button>
    //                 </div>
    //             </section>
    //         </div>
    //     );
    // })
) 
};

export default Quiz;
