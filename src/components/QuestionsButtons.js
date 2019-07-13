import React from "react";
import styles from "./QuizTitle.module.css";
import { QButton } from "./QButton";

export class QuestionsButtons extends React.Component {
  render() {
    const {
      onQuestionChangeHandler,
      currentQuestionId,
      totalNumberOfQuestion
    } = this.props;

    return (
      <div>
        {(
          <button disabled={!currentQuestionId} onClick={() => onQuestionChangeHandler(currentQuestionId - 1)}>
            Poprzednie pytanie
          </button>
        )}
        {(
          <button disabled={currentQuestionId === (totalNumberOfQuestion - 1)} onClick={() => onQuestionChangeHandler(currentQuestionId + 1)}>
            Nastepne pytanie
          </button>
        )}
      </div>
    );
  }
}
