import React, { useState } from 'react'
import AnswerInput from './AnswerInput'



export default function AnswersList(props) {

    const [answers, setAnswers] = useState([
        { answer: 'aaa', isCorrect: false },
        { answer: 'bbb', isCorrect: false },
        { answer: 'ccc', isCorrect: false },

    ]);

    console.log(answers)

    function onAnswerChange(newInput, answerId) {
        // answers[answerId].answer = newInput;
        setAnswers(answers.map((answer, index) => {
            if (index === answerId) {
                return {...answer, answer: newInput}
            } else {
                return answer;
            }
        }))
    }

    return (
        <div>

            {answers.map((answer, index) => {
                return <AnswerInput
                    answerId={index}
                    checked={answer.isCorrect}
                    answer={answer.answer}
                    onAnswerChange={onAnswerChange}

                ></AnswerInput>
            })}

        </div>
    )
}

function addAnswer () {
    
}