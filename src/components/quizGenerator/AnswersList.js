import React from 'react'
import AnswerInput from './AnswerInput'

import { QuizContext } from '../../contexts/QuizContext'

export default class AnswersList extends React.Component {

  static contextType = QuizContext


  render() {
    let context = this.context

    let localQuiz = {...context.quizes.quizes[0].questions[0]}
    
    return (
      <div className="quizAnswerInputs">
        {localQuiz.answers.map(answer => {
          return <AnswerInput
            name={'name'}
            autofocus
            key={answer.id}
            answerId={answer.id}
            answer={answer.answer}
            isCorrect={answer.correct}

          ></AnswerInput>
        })}
      </div>
    )
  }
}
