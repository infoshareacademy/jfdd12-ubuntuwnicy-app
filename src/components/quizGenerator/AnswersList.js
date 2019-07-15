import React, { useState, useEffect } from 'react'
import AnswerInput from './AnswerInput'
import AddAnswerButton from './AddAnswerButton';
import { DeleteQuestionButton } from './DeleteQuestionButton';
import * as QuizService from '../services/quizService'
import { Button } from '@material-ui/core'
import { firebaseApp } from '../../firebase'

export let questionsArrBackup = []
console.log(questionsArrBackup)

const post = [
    {
        question: "Ile kol ma samochod",
        answers: [
            {
                id: "A",
                answerBody: "jeden"
            },
            {
                id: "B",
                answerBody: "jeden"
            },
            {
                id: "C",
                answerBody: "jeden"
            }
        ],
        correctAnswer: "A"
    },
    {
        question: "Ile kol ma kot",
        answers: [
            {
                id: "A",
                answerBody: "Pytanie pierwsze"
            },
            {
                id: "B",
                answerBody: "Pytanie drugie"
            },
            {
                id: "C",
                answerBody: "Pytanie trzecie"
            },
            {
                id: "D",
                answerBody: "Pytanie czwarte"
            }
        ],
        correctAnswer: "A"
    }

]



const questionsArr = []
console.log(questionsArr)
let newAnswers = []


export default function AnswersList() {
    // QuizService.SaveQuiz(post)

    const [answers, setAnswers] = useState(questionsArr) // musi byc state!!!



    useEffect(() => {

        QuizService.GetQuiz().then(res => setAnswers(res))

    }, [])


    function onAnswerChange(newInput, answerId) {

        // answers[answerId].answer = newInput;
        answers[0].answers.map((answer, index) => {

            if (answer.id === answerId) {

                const newAnswers = answers

                // newAnswers[0].answers[index].answerBody = {...answerBody, newInput}
  
                return setAnswers(newAnswers)
            } else {
                return answer;
            }
        })
    }

    function onCheckboxChange(state, answerId) {

        answers[0].answers.map((answer) => {

            if (answer.id === answerId) {

                const newAnswers = answers
                newAnswers[0].correctAnswer = answerId
                return setAnswers(newAnswers)
            } else {
                console.log(answers)
                return answer

            }
        })
    }

    function onAnswerDelete(answerId) {

        if (answers.length+1 <= 2) {
            return
        }
        else {
            setAnswers(answers[0].answers.filter((answer) => answer.id===answerId))
            console.log(answers)
        }


    }

    function onAnswerAdd() {

        setAnswers(

            answers.push({ id: 3, answer: 'ccc', isCorrect: false })

        )
    }

    function onQuizSave() {
        console.log(answers)
        QuizService.SaveQuiz(post)
    }

    const AnAnswer = function () {
        console.log(answers)
        return answers[0].answers.map((answer, index) => {
            // debugger
            return <AnswerInput
                key={answer.id}
                answerIdToShow={index + 1}
                answerId={answer.id}
                answer={answer.answerBody}
                onAnswerChange={onAnswerChange}
                isCorrect={answer.isCorrect}
                onCheckboxChange={onCheckboxChange}
                onAnswerClickDelete={onAnswerDelete}
            ></AnswerInput>
        })
    }


    const AnswersRender = function () {

        if (answers[0] !== [] && answers[0] !== undefined && answers[0] !== {} && answers[0] !== null) {

            return <AnAnswer></AnAnswer>
        }

        else {
            return null
        }
    }



    return (
        <div className="quizAnswerInputs">
            <AnswersRender />
            <br></br>
            <br></br>
                <button className='addQuestionButton'
                    onClick={onQuizSave}
                >Zapisz Quiz</button>
        </div>
    )

}



