import React, { useState } from 'react'
import AnswerInput from './AnswerInput'
import AddAnswerButton from './AddAnswerButton';
import { DeleteQuestionButton } from './DeleteQuestionButton';
import { FetchQuiz, SaveQuiz } from '../services/quizService'
import { Button } from '@material-ui/core'


export let questionsArr = [
    {
        id: "1",
        question: "Ile kol ma samochod",
        answers: [
            {
                id: "A",
                answerBody: "jeden",
                isCorrect: true,
                isHighlighted: false
            },
            {
                id: "B",
                answerBody: "jeden",
                isCorrect: false,
                isHighlighted: false
            },
            {
                id: "C",
                answerBody: "jeden",
                isCorrect: false,
                isHighlighted: false
            }
        ],
    }
]

export default function AnswersList(props) {


    const [answers, setAnswers] = useState(questionsArr) // musi byc state!!!

    console.log(answers)

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
        SaveQuiz(questionsArr)
        FetchQuiz()

    }

    function onAnswerAdd() {

        setAnswers(

            answers.push({ id: 3, answer: 'ccc', isCorrect: false })

        )


    }



    return (
        <div className="quizAnswerInputs">
            <AddAnswerButton onAnswerAdd={onAnswerAdd}></AddAnswerButton>


            {answers[0].answers.map((answer, index) => {
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

            <DeleteQuestionButton></DeleteQuestionButton>
            <br></br>
            <br></br>
            <Button
                onClick={SaveQuiz(questionsArr)}
            >Zapisz quiz</Button>


        </div>
    )
}

