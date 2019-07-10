import React from 'react'
import QuizTitleInput from './QuizTitleInput';
import AnswersList from './AnswersList';
import QuestionInput from './QuestionInput';



export default function AddQuestionButton(props) {
    return (
        <button className='addQuestionButton' onClick={() => alert('hi!')}>Dodaj Pytanie</button>
    )
}
