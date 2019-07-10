import React from 'react'
import './QuizGenWrapperStyles.css'

import QuizTitleInput from './QuizTitleInput';
import AnswersList from './AnswersList'
import QuestionInput from './QuestionInput'
import AddAnswerButton from './AddAnswerButton'
import AddQuestionButton from './AddQuestionButton'
import { DeleteQuestionButton } from './DeleteQuestionButton';

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
            <QuizTitleInput />
            <div className={"quizGenInputs"}>
                <QuestionInput questionID='1' />
                <AnswersList />
                <div className="quizButtons">
                    <AddAnswerButton />
                    <AddQuestionButton />
                    <DeleteQuestionButton />
                </div>
            </div>
        </div>
    )
}

export default QuizGenWrapper