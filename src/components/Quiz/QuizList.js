import React from "react";
import styles from "./QuizTitle.module.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as QuizService from "../../services/QuizService";
import { QuizContext } from "../../contexts/QuizContext";

const Button = ({ children, disabled = false, onClick, isQuestionNumber }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`${styles.buttonQuestion} ${styles.buttonQuestionNumber}`}
  >
    {children}
  </button>
);

export default class QuizList extends React.Component {
  static contextType = QuizContext;

  render() {
    const { onQuizChangeHandler, currentQuizId } = this.props;

    return (
      <div>
        {this.context.quizes.map(quiz => (
          <QuizButton
            currentQuizId={currentQuizId}
            key={quiz.id}
            onClick={() => onQuizChangeHandler(currentQuizId)}
            link={quiz.id}
          />
        ))}
      </div>
    );
  }
}

function QuizButton(props) {
  const { key, onClick, link, currentQuizId } = props;

  return (
    <Link to={`/quiz/${link}`}>
      <button className={styles.buttonQuestion}>asd</button>
    </Link>
  );
}
