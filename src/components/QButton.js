import React from "react";
import styles from "./QuizTitle.module.css";

export function QButton(props) {
  const { question } = props;
  const { id } = question;

  return <button className={styles.buttonQuestion}>{id}</button>;
}
