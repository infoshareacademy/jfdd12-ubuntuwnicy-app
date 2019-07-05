import React, { useState } from 'react'

export default function AnswerInput(props) {

    const [getValue, setValue] = useState("");

    return (
        <div>
            <p className='answerID'>{props.answerID}</p>
            <input
                className="answerInput"
                value={getValue}
                placeholder='Wprowadź pytanie'
                onChange={event => {
                    setValue(event.target.value)
                }}
            // onKeyPress={event => {


            // }}
            ></input>
            <input type='checkbox' className='isAnswerCorrect'></input>
        </div>
    )
}
