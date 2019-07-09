import React from 'react'
import './QuizGenWrapperStyles.css'

import QuizTitleInput from './QuizTitleInput';
import AnswersList from './AnswersList'
import QuestionInput from './QuestionInput'
import AddAnswerButton from './AddAnswerButton'
import AddQuestionButton from './AddQuestionButton'

const answersArr = [
    {
        id: 1,
        value: '',
        isCorrect: false
    }
]

function QuizGenWrapper(props) {
    return (
        <div className='quizGenWrapper'>
            <h1 className='quizGenHeader'>STWÓRZ QUIZ</h1>
            <div className={"quizGenInputs"}>
            <QuizTitleInput />
            <QuestionInput questionID='1' />
            <AnswersList />
            <AddAnswerButton />
            <AddQuestionButton />
            </div>



        </div>
    )
}

export default QuizGenWrapper