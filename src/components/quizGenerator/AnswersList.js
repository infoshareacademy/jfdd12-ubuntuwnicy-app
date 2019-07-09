import React, { useState } from 'react'
import AnswerInput from './AnswerInput'

export let answersArr = [
    { answer: 'aaa', isCorrect: false },
    { answer: 'bbb', isCorrect: false },
    { answer: 'ccc', isCorrect: false },

]

export default function AnswersList() {

    const [answers, setAnswers] = useState(answersArr);

    console.log(answers)

    function onAnswerChange(newInput, answerId) {
        // answers[answerId].answer = newInput;
        setAnswers(answers.map((answer, index) => {
            if (index === answerId) {
                return { ...answer, answer: newInput }
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
                    isCorrect={answer.isCorrect}

                ></AnswerInput>
            })}

        </div>
    )
}

