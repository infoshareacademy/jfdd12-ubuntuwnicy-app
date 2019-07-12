import React, { useState } from 'react'
import AnswerInput from './AnswerInput'

export let answersArr = [
    { id: 1, answer: 'aaa', isCorrect: false },
    { id: 2, answer: 'bbb', isCorrect: true },
    { id: 3, answer: 'ccc', isCorrect: false },

]

export default function AnswersList(props) {
    // console.log(props);
    const [answers, setAnswers] = useState(answersArr);

    function onAnswerChange(newInput, answerId) {
        // answers[answerId].answer = newInput;
        setAnswers(answers.map((answer) => {
            if (answer.id === answerId) {
                return { ...answer, answer: newInput }
            } else {
                return answer;
            }
        }))
    }

    function onCheckboxChange(state, answerId) {
        setAnswers(answers.map((answer, index) => {
            if (answer.id === answerId) {

                return { ...answer, isCorrect: state }
            } else {
                console.log(answers)
                return answer

            }
        }))
    }

    function onAnswerDelete(answerId) {


        setAnswers(answers.filter((answer) => answer.id !== answerId))
    }
   
    // console.log(props.question.answers)
    return (
        <div className="quizAnswerInputs">

            {props.question.answers.map((answer, index) => {
                return <AnswerInput
                    key={answer.id}
                    answerIdToShow={index + 1}
                    answerId={answer.id}
                    answer={answer.answer}
                    onAnswerChange={onAnswerChange}
                    isCorrect={answer.isCorrect}
                    onCheckboxChange={onCheckboxChange}
                    onAnswerDelete={onAnswerDelete}
                ></AnswerInput>
            })}

        </div>
    )
}

