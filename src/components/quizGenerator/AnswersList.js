import React, { useState } from 'react'
import AnswerInput from './AnswerInput'



export default function AnswersList(props) {

    const [questions, setQuestions] = useState([
        { question: 'aaa', isCorrect: false },
        { question: 'aba', isCorrect: true },
        { question: 'aca', isCorrect: false },
        { question: 'aca', isCorrect: false },
        { question: 'aca', isCorrect: false }
    ]);

    return (
        <div>

            {questions.map((question, index) => <AnswerInput
                answerID={index}
                checked={question.isCorrect}
                question={question.question}
                
            />)}

        </div>
    )
}