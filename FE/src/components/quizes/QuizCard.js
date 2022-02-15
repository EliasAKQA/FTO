import React, {useEffect} from 'react';
import './quizCard.scss';
import {Link} from "react-router-dom";
import axios from 'axios';
import Url from 'config';

const QuizCard = (props) => {
console.log(props.data);
    return (
        <Link to={'/quiz/' + props.data.theme +'/'+ props.data.id + '/start'} key={props.data.id}>
            <div className={`cardImg ${props.data.theme}`}
                 style={{backgroundImage: `url("${Url.SERVER_URL + props.data.imageUrl}")`}}>
                <h4>{props.data.theme}</h4>
            </div>
        </Link>
    );
};

export default QuizCard;