import React from 'react'
import QuizTitleInput from './QuizTitleInput';
import AnswersList from './AnswersList'
import QuestionInput from './QuestionInput'


export default function AddQuestionButton(props) {

    const { questionID, answersCount } = props

    function addQuestion() {

        return <QuestionInput />

    }

    return (
        <button className='addQuestionButton' onClick={addQuestion}>Dodaj Pytanie</button>
    )
}
