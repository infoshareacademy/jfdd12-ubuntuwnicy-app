import React from 'react'
import AnswerInput from './AnswerInput'

export default class AnswersList extends React.Component {
  render() {
    return (
      <div className="quizAnswerInputs">
        {this.props.question.answers.map(answer => {
          return <div> 
          <AnswerInput
            name={answer.id}
            autofocus
            key={answer.id}
            answerId={answer.id}
            answer={answer.answer}
            isCorrect={answer.correct}
            onCheckboxChange={this.props.onClickCheckboxChange}
            onAnswerChange={this.props.onAnswerChange}
            onClickRemoveAnswer={this.props.onClickRemoveAnswer}
          ></AnswerInput>
          </div>
        })}
      </div>
    )
  }
}
