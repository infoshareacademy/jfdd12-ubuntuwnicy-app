import React from 'react'
import AnswerInput from './AnswerInput'

export default class AnswersList extends React.Component {
  render() {
    return (
      <div className="quizAnswerInputs">
        {this.props.question.answers.map(answer => {
          return <div>
          <button className='removeAnswerButton' name={answer.id} onClick={this.props.onClickRemoveAnswer}>X</button> 
          <AnswerInput
            name={answer.id}
            autofocus
            key={answer.id}
            answerId={answer.id}
            answer={answer.answer}
            isCorrect={answer.correct}
            onCheckboxChange={this.props.onClickCheckboxChange}
            onAnswerChange={this.props.onAnswerChange}
          ></AnswerInput>
          </div>
        })}
      </div>
    )
  }
}
