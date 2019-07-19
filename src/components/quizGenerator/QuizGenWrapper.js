import React from "react";
import "./QuizGenWrapperStyles.css";
import AnswersList from "./AnswersList";
import QuestionInput from "./QuestionInput";
import { QuizContext } from "../../contexts/QuizContext";
import QuizTitleInput from "./QuizTitleInput";
import { Button } from "@material-ui/core";

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

  handleSaveQuiz = () => {
    this.context.updateQuiz(this.state);
  };

  render() {
    console.log(this.state);
    console.log(this.context);

    const { title, questions } = this.state;

    return (
      <div className="quizGenWrapper">
        <h1 className="quizGenHeader">STWÓRZ QUIZ</h1>
        <QuizTitleInput quizTitle={title} onChange={this.handleTitleChange} />
        {questions.map((question, index) => (
          <div key={index} className={"quizGenInputs"}>
            <QuestionInput
              question={question}
              onChange={this.handleQuestionChange}
            />
            <AnswersList question={question} questionId={index} />
          </div>
        ))}
        <Button onClick={this.handleSaveQuiz}>Zapisz Quiz</Button>
      </div>
    );
  }
}
