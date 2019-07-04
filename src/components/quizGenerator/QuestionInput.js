import React from 'react'

function QuestionInput(props) {
    return (
        <div>
            <p className='questionID'>{props.questionID}</p>
            <input className="questionInput"></input>
            <button className="deleteQuestion">x</button>
        </div>
    )
}

export default QuestionInput