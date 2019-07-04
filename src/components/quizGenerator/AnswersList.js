import React from 'react'
import AnswerInput from './AnswerInput'

export default function AnswersList(props) {
    return (
        <>
            <AnswerInput answerID={1} />
            <AnswerInput answerID={2} />
            <AnswerInput answerID={3} />
            <AnswerInput answerID={4} />
        </>
    )
}