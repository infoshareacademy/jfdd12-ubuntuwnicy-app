import React from "react";
import "./QuizGenWrapperStyles.css";
import AnswersList from "./AnswersList";
import QuestionInput from "./QuestionInput";
import { QuizContext } from "../../contexts/QuizContext";

export default class QuizGenWrapper extends React.Component {
  static contextType = QuizContext;

  render() {
    let context = this.context;
    let questionsIndexZero = context.quizes.quizes[0].questions;

    return (
      <div className="quizGenWrapper">
        <h1 className="quizGenHeader">STWÓRZ QUIZ</h1>
        {questionsIndexZero.map((question, index) => (
          <div key={index} className={"quizGenInputs"}>
            <QuestionInput question={question} questionId={index} />
            <AnswersList question={question} questionId={index} />
          </div>
        ))}
      </div>
    );
  }
}
