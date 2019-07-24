import React from "react";
import styles from "./QuizTitle.module.css";

const Button = ({ children, disabled = false, onClick, isQuestionNumber }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`${styles.buttonQuestion} ${styles.buttonQuestionNumber}`}
  >
    {children}
  </button>
);

export class QuestionsButtons extends React.Component {
  render() {
    const {
      onQuestionChangeHandler,
      currentQuestionId,
      totalNumberOfQuestion
    } = this.props;

    const renderButtons = () => {
      console.log(currentQuestionId);
      let questions = Array(totalNumberOfQuestion)
        .fill(1)
        .map((x, index) => index + 1);
      if (currentQuestionId < 3) {
        questions = questions.slice(0, 5);
      } else if (currentQuestionId > 7) {
        questions = questions.slice(-5);
      } else {
        questions = questions.slice(
          currentQuestionId - 2,
          currentQuestionId + 3
        );
      }
      return questions.map((question, index) => (
        <Button
          onClick={() => {
            onQuestionChangeHandler(question - 1);
          }}
          disabled={currentQuestionId + 1 === question}
          key={index}
        >
          {question}
        </Button>
      ));
    };

    return (
      <div>
        <Button
          disabled={!currentQuestionId}
          onClick={() => onQuestionChangeHandler(0)}
        >
          {"<<"}
        </Button>
        <Button
          disabled={!currentQuestionId}
          onClick={() => onQuestionChangeHandler(currentQuestionId - 1)}
        >
          {"<"}
        </Button>
        {renderButtons()}
        <Button
          disabled={currentQuestionId === totalNumberOfQuestion - 1}
          onClick={() => onQuestionChangeHandler(currentQuestionId + 1)}
        >
          {">"}
        </Button>
        <Button
          disabled={currentQuestionId === totalNumberOfQuestion - 1}
          onClick={() => onQuestionChangeHandler(totalNumberOfQuestion - 1)}
        >
          {">>"}
        </Button>
      </div>
    );
  }
}
