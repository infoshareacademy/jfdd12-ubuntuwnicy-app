import React from "react";
import styles from "./QuizTitle.module.css";

const Title = <h1 className={styles.quizName}>NAZWA QUIZU</h1>;

const Question = <p className={styles.currentQuestion}>OBECNE PYTANIE</p>;

const Answer = <p className={styles.possibleAnswer}>MOZLIWE ODPOWIEDZI</p>;

const Button = <button className={styles.button}>A</button>;

const ArrowRight = <button className />;

const ArrowLeft = <button className>as</button>;

const Timer = (
  <div>
    <div className={styles.quizTimer}>00:00</div>
  </div>
);

export class QuizTitle extends React.Component {
  render() {
    return (
      <div>
        {Title}
        {Timer}
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
