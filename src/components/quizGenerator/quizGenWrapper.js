import React from 'react'

import QuizTitleInput from './quizTitleInput';
import QuestionInput from './questionInput'

function QuizGenWrapper(props) {
    return (
        <div className='quizGenWrapper'>
            <h1>STWÓRZ QUIZ</h1>
            <QuizTitleInput />
            <QuestionInput />



        </div>
    )
}

export default QuizGenWrapper