import React from "react";
import styles from "./QuizTitle.module.css";

const LIMIT = 3;

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

    const lowerLimit = Math.max(0, currentQuestionId - LIMIT);
    const upperLimit = Math.min(
      currentQuestionId + LIMIT,
      totalNumberOfQuestion - 1
    );

    // const lowerButtons = [...Array(currentQuestionId - lowerLimit)].map(
    //   (_, index) => {
    //     const id = currentQuestionId - (currentQuestionId - lowerLimit) + index;
    //     return (
    //       <Button onClick={() => onQuestionChangeHandler(id)}>{id + 1}</Button>
    //     );
    //   }
    // );

    // const upperButtons = [...Array(upperLimit - currentQuestionId)].map(
    //   (_, index) => {
    //     const id = currentQuestionId + index + 1;
    //     return (
    //       <Button onClick={() => onQuestionChangeHandler(id)}>{id + 1}</Button>
    //     );
    //   }
    // );

    return (
      <div>
        {/* {
          <Button
            disabled={!currentQuestionId}
            onClick={() => onQuestionChangeHandler(currentQuestionId - 1)}
          >
            Poprzednie pytanie
          </Button>
        }
        {lowerButtons}
        <Button disabled>{currentQuestionId + 1}</Button>
        {upperButtons}
        {
          <Button
            disabled={currentQuestionId === totalNumberOfQuestion - 1}
            onClick={() => onQuestionChangeHandler(currentQuestionId + 1)}
          >
            Następne pytanie
          </Button>
        } */}
      </div>
    );
  }
}
