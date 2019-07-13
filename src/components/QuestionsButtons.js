import React from "react";
import styles from "./QuizTitle.module.css";
import { QButton } from "./QButton";

const LIMIT = 3;

export class QuestionsButtons extends React.Component {
  render() {
    const {
      onQuestionChangeHandler,
      currentQuestionId,
      totalNumberOfQuestion
    } = this.props;

    const lowerLimit = Math.max(0, currentQuestionId - LIMIT);
    const upperLimit = Math.min(currentQuestionId + LIMIT, totalNumberOfQuestion);

    const lowerButtons = [...Array(currentQuestionId - lowerLimit)].map((_, index) => (
      <button>lower {currentQuestionId - lowerLimit + index}</button>
    ));

    const upperButtons = [...Array(upperLimit - currentQuestionId)].map((_, index) => (
      <button>upper {currentQuestionId + index}</button>
    ));

    return (
      <div>
        {(
          <button disabled={!currentQuestionId} onClick={() => onQuestionChangeHandler(currentQuestionId - 1)}>
            Poprzednie pytanie
          </button>
        )}
        { lowerButtons }
        { upperButtons }
        {(
          <button disabled={currentQuestionId === (totalNumberOfQuestion - 1)} onClick={() => onQuestionChangeHandler(currentQuestionId + 1)}>
            Nastepne pytanie
          </button>
        )}
      </div>
    );
  }
}
