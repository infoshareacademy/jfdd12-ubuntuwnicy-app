import React from "react";
import styles from "./QuizTitle.module.css";
import { stringLiteral } from "@babel/types";
import { QuestionsButtons } from "./questionsButtons";
import { Timer } from "./Timer";

const questions = [
  {
    question: "Ile kol ma samochod",
    answers: [
      {
        id: "A",
        answerBody: "jeden"
      },
      {
        id: "B",
        answerBody: "jeden"
      },
      {
        id: "C",
        answerBody: "jeden"
      }
    ],
    correctAnswer: "A"
  },
  {
    question: "Ile kol ma kot",
    answers: [
      {
        id: "A",
        answerBody: "Pytanie pierwsze"
      },
      {
        id: "B",
        answerBody: "Pytanie drugie"
      },
      {
        id: "C",
        answerBody: "Pytanie trzecie"
      },
      {
        id: "D",
        answerBody: "Pytanie czwarte"
      }
    ],
    correctAnswer: "A"
  },
  {
    question: "Pytanie numer trzy",
    answers: [
      {
        id: "A",
        answerBody: "Tak"
      },
      {
        id: "B",
        answerBody: "Nie"
      }
    ],
    correctAnswer: "C"
  },
  {
    question: "Ostatnie pytanie",
    answers: [
      {
        id: "A",
        answerBody: "Pytanie pierwsze"
      },
      {
        id: "B",
        answerBody: "Pytanie drugie"
      },
      {
        id: "C",
        answerBody: "Pytanie trzecie"
      }
    ],
    correctAnswer: "D"
  }
];

const Answer = ({ answer, isClicked, onClick }) => (
  <li className={styles.possibleAnswer} style={{ backgroundColor: "#feffd9" }}>
    <button
      className={`${styles.button} ${isClicked ? styles.button : ""}`}
      style={{ backgroundColor: `${isClicked ? "green" : "white"}` }}
      onClick={() => {
        onClick(answer.id);
      }}
    >
      {answer.id}
    </button>{" "}
    {answer.answerBody}
  </li>
);

export class QuizTitle extends React.Component {
  state = {
    currentQuestion: 0,
    currentAnswer: [],
    allAnswers: [],
    questions: questions
  };

  increment = () => {
    this.setState({
      page: this.state.page + 1
    });
  };

  handleClick = answerID => {
    console.log(answerID);
    console.log("hello");

    this.setState({
      currentAnswer: answerID,
      allAnswers: `${[...this.state.allAnswers]}`
    });
  };

  nextQuestion = answerID => {
    console.log(answerID);

    this.setState({ currentQuestion: 1 });
  };

  render() {
    return (
      <div click={this.clicked} className={styles.quizTitles}>
        <div className={styles.questionCard}>
          <div>
            <h1 className={styles.quizName}>
              {this.state.questions[this.state.currentQuestion].question}
            </h1>
            <Timer className={styles.quizTimer} />
          </div>
          <div className={styles.answerWrapper}>
            <ul className={styles.answerList}>
              {this.state.questions[this.state.currentQuestion].answers.map(
                answer => (
                  <Answer
                    key={answer.id}
                    answer={answer}
                    className={styles.answer}
                    isClicked={answer.id === this.state.currentAnswer}
                    onClick={this.handleClick}
                  />
                )
              )}
            </ul>
          </div>
          <QuestionsButtons page={this.nextQuestion} />
        </div>
        <div className={styles.buttonWrapper}>
          <div className={styles.arrowImageBox}>
            <img
              className={styles.arrowImage}
              onClick={() =>
                this.state.currentQuestion === 0
                  ? this.state.currentQuestion
                  : this.setState({
                      currentQuestion: this.state.currentQuestion - 1
                    })
              }
              src="https://cdn3.iconfinder.com/data/icons/line/36/arrow_left-512.png"
            />
          </div>
          <div className={styles.arrowImageBox}>
            <img
              className={styles.arrowImage}
              onClick={() =>
                this.state.currentQuestion === this.state.questions.length - 1
                  ? this.state.currentQuestion
                  : this.setState({
                      currentQuestion: this.state.currentQuestion + 1,
                      allAnswers:
                        this.state.allAnswers + this.state.currentAnswer
                    })
              }
              src="https://cdn3.iconfinder.com/data/icons/line/36/arrow_right-512.png"
            />
          </div>
        </div>
      </div>
    );
  }
}
