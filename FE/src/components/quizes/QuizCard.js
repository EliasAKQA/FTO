import React, {useEffect} from 'react';
import './quizCard.scss';
import {Link} from "react-router-dom";

const QuizCard = (props) => {

    return (
        <Link to={'/quiz/' + props.name + '/start'}>
            <div className={`cardImg ${props.name}`}
                 style={{backgroundImage: `url("/assets/images/quiz/${props.name}.svg")`}}>
                <h4>{props.name}</h4>
            </div>
        </Link>
    );
};

export default QuizCard;