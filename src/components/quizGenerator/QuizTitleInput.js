import React from 'react'

function QuizTitleInput(props) {
    return (
        <>
            <input className="quizTitleInput"></input>
            <input className='quizTitleTimer' defaultValue='00:00'></input>
        </>
    )
}

export default QuizTitleInput