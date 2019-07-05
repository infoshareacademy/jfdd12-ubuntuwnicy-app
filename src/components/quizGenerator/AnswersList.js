import React from 'react'
import AnswerInput from './AnswerInput'

const answersArr = [
    {
        id: 1,
        value: '',
        isCorrect: false
    }
]

export default function AnswersList(props) {



    return (
        <div>
            <AnswerInput answerID={1} />
            <AnswerInput answerID={2} />
            <AnswerInput answerID={3} />
            <AnswerInput answerID={4} />
        </div>
    )
}