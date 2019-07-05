import React from 'react'

function AnswerInput(props) {
    return (
        <div>
            <p className='answerID'>{props.answerID}</p>
            <input className="answerInput"></input>
            <input type='checkbox' className='isAnswerCorrect'></input>
        </div>
    )
}

export default AnswerInput