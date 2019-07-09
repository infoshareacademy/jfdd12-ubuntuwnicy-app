import React from 'react'
import QuizTitleInput from './QuizTitleInput';
import AnswersList from './AnswersList'
import QuestionInput from './QuestionInput'


export default function AddQuestionButton(props) {

    function addQuestion() {

        return <div>
            <QuizTitleInput />
            <QuestionInput />
            <AnswersList />
        </div>
    }

    return (
        <button className='addQuestionButton' onClick={addQuestion}>Dodaj Pytanie</button>
    )
}
