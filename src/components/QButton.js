import React from "react";
import styles from "./QuizTitle.module.css";
import { BrowserRouter, Route, Link } from "react-router-dom";

export function QButton(props) {
  const { question, onClickQButton } = props;
  const { id } = question;

  return (
    <Link to={id}>
      <button className={styles.buttonQuestion} onClick={onClickQButton}>
        {id}
      </button>
    </Link>
  );
}
