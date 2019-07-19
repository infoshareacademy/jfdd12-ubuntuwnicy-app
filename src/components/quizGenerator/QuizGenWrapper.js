import React from 'react'
import './QuizGenWrapperStyles.css'
import AnswersList from './AnswersList'
import QuestionInput from './QuestionInput'
import { QuizContext } from '../../contexts/QuizContext'
import QuizTitleInput from './QuizTitleInput'
import { Button } from '@material-ui/core'
import RemoveQuestionButton from '../RemoveQuestionButton';
import AddQuestionButton from './AddQuestionButton'

export default class QuizGenWrapper extends React.Component {
  state = {
    ...this.context.selectQuiz("1")
  }

  static contextType = QuizContext

  handleTitleChange = (newTitle) => {
    this.setState({
      ...this.state,
      title: newTitle
    })
  }

  handleQuestionChange = (questionId, newQuestion) => {
    const newQuestions = this.state.questions.map(questionObject => {
      if (questionObject.id === questionId) {
        return {
          ...questionObject,
          question: newQuestion
        }
      } else {
        return questionObject
      }
    })

    this.setState({
      ...this.state,
      questions: newQuestions
    })
  }

  handleSaveQuiz = () => {
    this.context.updateQuiz(this.state)
  }

  handleAddQuestion = () => {
    const newQuestionCard = {
      id: `${this.state.questions.length + 1}`,
      question: "wprowadź pytanie",
      answers: [
        {
          id: "1",
          answer: "",
          correct: true
        },
        {
          id: "2",
          answer: "",
          correct: true
        }
      ]
    }
    const newQuestions = [
      ...this.state.questions,
      newQuestionCard
    ]
    this.setState({
      ...this.state,
      questions: newQuestions
    })
  }

  handleRemoveQuestion = (questionId) => {
    const newQuestions = this.state.questions.filter(question =>
      question.id !== questionId)

      let questionIndex = 0

      newQuestions.map(question => {
        questionIndex = questionIndex + 1 
        question.id = `${questionIndex}`
      })
      this.setState({
        ...this.state,
        questions: newQuestions
      })
  }

  render() {

    console.log(this.state)
    console.log(this.context)

    const { title, questions } = this.state

    return <div className='quizGenWrapper'>
      <h1 className='quizGenHeader'>STWÓRZ QUIZ</h1>
      <QuizTitleInput quizTitle={title} onChange={this.handleTitleChange} />
      {
        questions.map((question, index) =>
          <div key={index} className={"quizGenInputs"}>
            <RemoveQuestionButton onClick={() => this.handleRemoveQuestion(question.id)} />
            <QuestionInput question={question} onChange={this.handleQuestionChange} />
            <AnswersList question={question} questionId={index} />
          </div>
        )
      }
      <AddQuestionButton onClick={this.handleAddQuestion} />
      <Button onClick={this.handleSaveQuiz}>Zapisz Quiz</Button>
    </div>
  }
}


