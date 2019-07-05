import React, { useState } from 'react'

export default function AnswerInput(props) {



    const { question, isCorrect } = props

    return (
        <div>
            <p className='answerID'>{props.answerID}</p>
            <input
                className="answerInput"
                value={question}
                placeholder='Wprowadź pytanie'
            // onChange={event =>
            //     setInputValue(event.target.value)
            // }
            ></input>
            <input type='checkbox' className='isAnswerCorrect'
                checked={isCorrect}
            ></input>
        </div>
    )
}
