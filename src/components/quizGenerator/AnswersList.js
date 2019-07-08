import React from 'react'
import AnswerInput from './AnswerInput'

export default function AnswersList(props) {
    return (
        <div className="quizAnswerInputs">
            <AnswerInput answerID={1} />
            <AnswerInput answerID={2} />
            <AnswerInput answerID={3} />
            <AnswerInput answerID={4} />
        </div>
    )
}