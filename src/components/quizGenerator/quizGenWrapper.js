import React from 'react'
import './quizGenWrapperStyles.css'

import QuizTitleInput from './quizTitleInput';
import QuestionsList from './questionsList'

function QuizGenWrapper(props) {
    return (
        <div className='quizGenWrapper'>
            <h1 className='quizGenHeader'>STWÓRZ QUIZ</h1>
            <QuizTitleInput />
            <QuestionsList />



        </div>
    )
}

export default QuizGenWrapper