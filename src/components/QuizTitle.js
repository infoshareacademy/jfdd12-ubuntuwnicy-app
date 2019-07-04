import React from "react";
import styles from "./QuizTitle.module.css";

const Title = <h1>NAZWA QUIZU</h1>;

const Question = <p>OBECNE PYTANIE</p>;

const Answer = <p className={styles.possibleAnswer}>MOZLIWE ODPOWIEDZI</p>;

const Button = <button>A</button>;

export class QuizTitle extends React.Component {
  render() {
    return (
      <div>
        {Title}
        {Question}
        <div className={styles.answerWrapper}>
          {Button} {Answer}
          {Button} {Answer}
          {Button} {Answer}
          {Button} {Answer}
        </div>
      </div>
    );
  }
}
