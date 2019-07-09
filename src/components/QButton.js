import React from "react";
import styles from "./QuizTitle.module.css";

export function QButton(props) {
  const { question, onClickQButton } = props;
  const { id } = question;

  return (
    <button className={styles.buttonQuestion} onClick={onClickQButton}>
      {id}
    </button>
  );
}
