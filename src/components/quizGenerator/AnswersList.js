import React, { useState, useEffect } from 'react'
import AnswerInput from './AnswerInput'
import AddAnswerButton from './AddAnswerButton';
import { DeleteQuestionButton } from './DeleteQuestionButton';
import * as QuizService from '../services/quizService'
import { Button } from '@material-ui/core'
import { firebaseApp } from '../../firebase'
import { getThemeProps } from '@material-ui/styles';
import { QuizContext } from '../../contexts/QuizContext'

export default class AnswersList extends React.Component {

    static contextType = QuizContext

    render() {
        let context = this.context
        let questionsIndexZero = context.quizes.quizes[0].questions[0]
        return (
            <div className="quizAnswerInputs">
                {questionsIndexZero.answers.map(answer => {
                    return <AnswerInput
                        name={'name'}
                        autofocus
                        key={answer.id}
                        answerId={answer.id}
                        answer={answer.answer}


                    ></AnswerInput>
                })}
            </div>
        )
    }
}
