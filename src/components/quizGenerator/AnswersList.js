import React from 'react'
import AnswerInput from './AnswerInput'

export default class AnswersList extends React.Component {
  render() {
    return (
      <div className="quizAnswerInputs">
        {this.props.question.answers.map(answer => {
          return <div>
          <button onClick={this.props.onClickRemoveAnswer}>X</button> 
          <AnswerInput
            name={'name'}
            autofocus
            key={answer.id}
            answerId={answer.id}
            answer={answer.answer}
            isCorrect={answer.correct}
            onCheckboxChange={() => { }}
            
          ></AnswerInput>
          </div>
        })}
      </div>
    )
  }
}
