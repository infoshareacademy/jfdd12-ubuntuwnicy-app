import React from "react";
import styles from "./QuizTitle.module.css";
import { stringLiteral } from "@babel/types";
import { QuestionsButtons } from "./questionsButtons";
import { Timer } from "./Timer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import quizquestions from "./quizquestions.json";

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
    </button>
    {answer.answerBody}
  </li>
);

const Question = ({ match }) => {
  return <div>{/* <h3>ID: {match.params.id}</h3> */}</div>;
};

export class QuizTitle extends React.Component {
  state = {
    currentQuestion: +this.props.match.params.id,
    currentAnswer: [],
    allAnswers: [],
    questions: questions,
    random: Math.random()
  };

  changePage() {
    console.log("ugabuga");
    this.setState({ currentQuestion: +this.props.match.params.id });
  }

  // componentDidUpdate(prevProps, prevState) {
  //   this.setState({
  //     currentQuestion: prevProps.props.match.params.id,
  //     random: Math.random()
  //   })
  // }

  // static getDerivedStateFromProps(props, state) {
  //   console.log(state);
  // this.setState({
  //   currentQuestion: props.match.params.id,
  //   random: Math.random()
  // });
  // }

  handleClick = answerID => {
    console.log(answerID);
    console.log("hello");

    this.setState({
      currentAnswer: answerID,
      allAnswers: `${[...this.state.allAnswers]}`
    });
  };

  render() {
    // if (this.props.match !== undefined) {
    //   const questionId = Number(this.props.match.params.id);
    //   if (this.state.currentQuestion !== questionId) {
    //     this.setState({ currentQuestion: questionId });
    //   }
    // }
    // console.log(this.state);
    return (
      <div className={styles.quizTitles}>
        <div className={styles.questionCard}>
          <div>
            <h1 className={styles.quizName}>
              {this.state.questions[this.props.match.params.id - 1].question}
            </h1>
            <Timer className={styles.quizTimer} />
          </div>
          <div className={styles.answerWrapper}>
            <ul className={styles.answerList}>
              {this.state.questions[this.props.match.params.id - 1].answers.map(
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
          <QuestionsButtons onClick={this.changePage} />
        </div>
      </div>
    );
  }
}
