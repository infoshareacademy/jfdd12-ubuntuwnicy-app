import React from "react";
import "./QuizGenWrapperStyles.css";
import AnswersList from "./AnswersList";
import QuestionInput from "./QuestionInput";
import { QuizContext } from "../../contexts/QuizContext";
import QuizTitleInput from "./QuizTitleInput";
import { Button } from "@material-ui/core";
import RemoveQuestionButton from "../RemoveQuestionButton";
import AddQuestionButton from "./AddQuestionButton";
import AddAnswerButton from "./AddAnswerButton";

export default class QuizGenWrapper extends React.Component {
  state = {
    ...this.context.selectQuiz("1")
  };

  static contextType = QuizContext;

  handleTitleChange = newTitle => {
    this.setState({
      ...this.state,
      title: newTitle
    });
  };

  handleQuestionChange = (questionId, newQuestion) => {
    const newQuestions = this.state.questions.map(questionObject => {
      if (questionObject.id === questionId) {
        return {
          ...questionObject,
          question: newQuestion
        };
      } else {
        return questionObject;
      }
    });
    this.setState({
      ...this.state,
      questions: newQuestions
    });
  };

  handleAnswerChange = (event, questionId) => {
    const answerId = event.target.name;
    const answerInput = event.target.value;

    console.log(answerId, answerInput);

    const newQuestions = this.state.questions.map(question => {
      if (question.id === questionId) {
        question.answers.map(answer => {
          if (answer.id === answerId) {
            answer.answer = answerInput;
            return answer;
          } else {
            return answer;
          }
        });
        return question;
      } else {
        return question;
      }
    });

    this.setState({
      ...this.state,
      questions: newQuestions
    });
  };

  handleSaveQuiz = () => {
    this.context.updateQuiz(this.state);
  };

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
    };
    const newQuestions = [...this.state.questions, newQuestionCard];
    this.setState({
      ...this.state,
      questions: newQuestions
    });
  };

  handleRemoveQuestion = questionId => {
    const newQuestions = this.state.questions.filter(
      question => question.id !== questionId
    );

    let questionIndex = 0;

    newQuestions.map(question => {
      questionIndex = questionIndex + 1;
      question.id = `${questionIndex}`;
    });
    this.setState({
      ...this.state,
      questions: newQuestions
    });
  };

  handleAddAnswer = questionId => {
    const newQuestions = this.state.questions.map(question => {
      if (question.id === questionId && question.answers.length < 6) {
        const newAnswer = {
          id: `${question.answers.length + 1}`,
          answer: "",
          correct: false
        };
        question.answers.push(newAnswer);
        return question;
      } else {
        return question;
      }
    });

    this.setState({
      ...this.state,
      questions: newQuestions
    });
  };

  handleRemoveAnswer = (questionId, event) => {
    const answerId = event.target.name;

    const newQuestions = this.state.questions.map(question => {
      if (question.id === questionId && question.answers.length > 2) {
        const newAnswers = question.answers.filter(answer => {
          return answer.id !== answerId;
        });

        let answerIndex = 0;

        newAnswers.map(answer => {
          answerIndex = answerIndex + 1;
          answer.id = `${answerIndex}`;

          return answer;
        });
        question.answers = newAnswers;
        return question;
      } else {
        return question;
      }
    });
    console.log(newQuestions);
    this.setState({
      ...this.state,
      questions: newQuestions
    });
  };

  handleCheckboxChange = (questionId, event) => {
    const answerId = event.target.name;
    debugger;
    const newQuestions = this.state.questions.map(question => {
      if (question.id === questionId) {
        question.answers.map(answer => {
          if (answer.id === answerId) {
            answer.correct = !answer.correct;
            return answer;
          } else {
            return answer;
          }
        });
        return question;
      } else {
        return question;
      }
    });
    this.setState({
      ...this.state,
      questions: newQuestions
    });
  };

  render() {
    console.log(this.state);
    console.log(this.context);

    console.log(this.state);
    console.log(this.context);

    const { title, questions } = this.state;

    return (
      <div className="quizGenWrapper">
        <h1 className="quizGenHeader">STWÓRZ QUIZ</h1>
        <QuizTitleInput quizTitle={title} onChange={this.handleTitleChange} />
        {questions.map((question, index) => (
          <div key={index} className={"quizGenInputs"}>
            <RemoveQuestionButton
              onClick={event => this.handleRemoveQuestion(question.id, event)}
            />
            <QuestionInput
              question={question}
              onChange={this.handleQuestionChange}
            />
            <AnswersList
              question={question}
              questionId={index}
              onClickRemoveAnswer={event =>
                this.handleRemoveAnswer(question.id, event)
              }
              onClickCheckboxChange={event =>
                this.handleCheckboxChange(question.id, event)
              }
              onAnswerChange={event =>
                this.handleAnswerChange(event, question.id)
              }
            />
            <AddAnswerButton
              onClick={() => this.handleAddAnswer(question.id)}
            />
          </div>
        ))}
        <AddQuestionButton onClick={this.handleAddQuestion} />
        <Button onClick={this.handleSaveQuiz}>Zapisz Quiz</Button>
      </div>
    );
  }
}
