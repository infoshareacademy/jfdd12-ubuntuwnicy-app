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
            },
            {
                id: "D",
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
    },

]


export default function AnswersList(props) {

    const { questionId } = props
    console.log(props)
    const [answers, setAnswers] = useState([])
    const [globalQuiz, setGlobalQuiz] = useState([])


    useEffect(() => {

        QuizService.GetQuiz().then(res => {
            console.log(res)
            setAnswers(res[questionId].answers)
            setGlobalQuiz(res)
        })

    }, [questionId])

    console.log(globalQuiz)

    function onAnswerChange(value, answerId) {
        console.log(value, answerId)
        console.log(answers)
        const newAnswers = answers.map(answer => {
            return answer.id === answerId ? {
                ...answer,
                answerBody: value
            } : answer
        })
        setAnswers(newAnswers)
    }


    function onCheckboxChange(e, answerId) {

        answers.map((answer) => {

            if (answer.id === answerId) {

                const newAnswers = answers
                globalQuiz[questionId].correctAnswer = answer.id
                QuizService.saveCheckbox(answerId, questionId)

                return setAnswers(newAnswers)
            } else {
                console.log(answers)
                return answer

            }

        })
    }



    function onAnswerDelete(props) {
        const { index } = props
        // debugger
        if (answers.length <= 2) {
            return
        }
        else {
            const newAnswers = answers
            answers.pop()
            return setAnswers(newAnswers)

        }

    }



    function onQuizSave() {
        console.log(answers)
        QuizService.saveQuestions(answers, questionId)
        // QuizService.SaveQuiz(globalQuiz)
        // QuizService.SaveQuiz(post)


    }

    const renderAnswersList = function () {
        console.log(answers)
        return answers.map((answer, index) => {
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
                isCorrect={answer.id === globalQuiz[questionId].correctAnswer}
                onCheckboxChange={onCheckboxChange}
                onAnswerClickDelete={onAnswerDelete}

            ></AnswerInput>
        })
    }


    const renderAnswersListIfNotEmpty = function () {

        if (globalQuiz[questionId] !== undefined && answers !== [] && answers !== undefined && answers !== {} && answers !== null) {

            return renderAnswersList()
        }

        else {
            return null
        }
    }



    return ( 
        <div>
            <div className="quizAnswerInputs">
                {renderAnswersListIfNotEmpty()}
            </div>
            <button className='saveQuizButton' onClick={onQuizSave}>
                    Zapisz Quiz
            </button>
        </div>
    )

}