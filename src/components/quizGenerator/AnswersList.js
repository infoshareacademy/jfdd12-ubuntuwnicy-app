import React, { useState, useEffect } from 'react'
import AnswerInput from './AnswerInput'
import AddAnswerButton from './AddAnswerButton';
import { DeleteQuestionButton } from './DeleteQuestionButton';
import * as QuizService from '../services/quizService'
import { Button } from '@material-ui/core'




export let questionsArrBackup = []
console.log(questionsArrBackup)

// [
//     { id: 1, answer: 'aaa', isCorrect: false },
//     { id: 2, answer: 'bbb', isCorrect: true },
//     { id: 3, answer: 'ccc', isCorrect: false },

// ]

const answers = QuizService.GetQuiz()

const questionsArr = questionsArrBackup
console.log(questionsArr)



export default function AnswersList(props) {

    const [answers, setAnswers] = useState(questionsArr) // musi byc state!!!

    useEffect(() => {

        QuizService.GetQuiz().then(res => setAnswers(res))
    }, [answers])

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

        answers.map((answer, index) => {

            if (answer.id === answerId) {


                return setAnswers({ ...answer, isCorrect: state })
            } else {
                console.log(answers)
                return answer

            }
        })
    }

    function onAnswerDelete(answerId) {

        setAnswers(answers.filter((answer) => answer.id !== answerId))

    }

    function onAnswerAdd() {

        setAnswers(

            answers.push({ id: 3, answer: 'ccc', isCorrect: false })

        )
    }

    function onQuizSave() {
        QuizService.SaveQuiz(questionsArrBackup)
    }

    const AnAnswer = function () {
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
                onAnswerDelete={onAnswerDelete}
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
        <AddAnswerButton onAnswerAdd={onAnswerAdd}></AddAnswerButton>

        <AnswersRender />

        <DeleteQuestionButton></DeleteQuestionButton>
        <br></br>
        <br></br>
        <Button
            onClick={onQuizSave}
        >Zapisz quiz</Button>

    </div>
)

}



