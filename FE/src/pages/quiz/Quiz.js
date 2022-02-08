import React from 'react';
import './Quiz.scss';

const Quiz = () => {
    return (
        <div className={'quiz'}>
            <h1>1/5</h1>
            <div className='text'>
                <p className={'question'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum pellentesque lacinia sit in dolor morbi ut orci, arcu. Nisl egestas id iaculis gravida diam sed. Diam eu ornare eu amet, nam sem. Molestie neque egestas urna, pretium turpis consequat vitae. Nibh.</p>
                <h2 className={' question questionmark'}>?</h2>
            </div>
            <div className={'answerOptions'}>
                <button className={'btn btn--primary'}>Answer 1</button>
                <button className={'btn btn--primary'}>Answer 2</button>
                <button className={'btn btn--primary'}>Answer 3</button>
                <button className={'btn btn--primary'}>Answer 4</button>
                <div className={'backSkip'}>
                <button className={'btn btn--primary'}>Back</button>
                <button className={'btn btn--primary'}>Skip</button>
                </div>
            </div>
        </div>
    );
};

export default Quiz;
