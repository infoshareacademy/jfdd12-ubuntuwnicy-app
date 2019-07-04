import React from 'react'

function QuestionInput(props) {
    return (
        <div>
            <input className="questionInput"></input>
            <input type='checkbox' className='isAnswerCorrect'></input>
        </div>
    )
}

export default QuestionInput