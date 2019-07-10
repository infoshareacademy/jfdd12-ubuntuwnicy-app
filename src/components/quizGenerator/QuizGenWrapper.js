import React, { useState } from 'react'
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

let answersArr1 = [
    { id: 1, answer: 'aaa', isCorrect: false },
    { id: 2, answer: 'bbb', isCorrect: true },
    { id: 3, answer: 'ccc', isCorrect: false },

]

function QuizGenWrapper(props) {

    const [answers, setAnswers] = useState(answersArr1);

    return (
        <div className='quizGenWrapper'>
            <h1 className='quizGenHeader'>STWÓRZ QUIZ</h1>
            <QuizTitleInput />
            <div className={"quizGenInputs"}>
                <QuestionInput questionID='1' />
                <AnswersList 
                    answers={answers}
                    setAnswers={setAnswers}
                />
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