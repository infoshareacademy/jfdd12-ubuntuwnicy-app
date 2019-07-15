import React, { useState, useEffect } from 'react'
import AnswerInput from './AnswerInput'
import AddAnswerButton from './AddAnswerButton';
import { DeleteQuestionButton } from './DeleteQuestionButton';
import * as QuizService from '../services/quizService'
import { Button } from '@material-ui/core'
import { firebaseApp } from '../../firebase'
import { getThemeProps } from '@material-ui/styles';



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


export default function AnswersList(props) {

    const { questionId } = props
    console.log(questionId)
    const [answers, setAnswers] = useState(newAnswers)

    useEffect(() => {

        QuizService.GetQuiz().then(res => setAnswers(res))

    }, [])


    function onAnswerChange(e) {

        const newAnswers = answers

        newAnswers[questionId].answers[0].answerBody = e.target.value
        return setAnswers(newAnswers)
    }


    function onCheckboxChange(state, answerId) {

        answers[questionId].answers.map((answer) => {

            if (answer.id === answerId) {

                const newAnswers = answers
                newAnswers[questionId].correctAnswer = answerId
                return setAnswers(newAnswers)
            } else {
                console.log(answers)
                return answer

            }
        })
    }

    function onAnswerDelete(props) {
        const { index } = props
        debugger
        if (answers[questionId].length <= 2) {
            return
        }
        else {
            const newAnswers = answers
            newAnswers[questionId].answers.pop()
            return setAnswers(newAnswers)

        }

    }



    function onQuizSave() {
        console.log(answers)
        QuizService.SaveQuiz(post)
    }

    const AnAnswer = function () {
        console.log(answers)
        return answers[questionId].answers.map((answer, index) => {
            // debugger
            return <AnswerInput
                name={'name'}
                autofocus
                index={index}
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

        if (answers[questionId] !== [] && answers[questionId] !== undefined && answers[questionId] !== {} && answers[questionId] !== null) {

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
            <Button
                onClick={onQuizSave}
            >Zapisz quiz</Button>

        </div>
    )

}