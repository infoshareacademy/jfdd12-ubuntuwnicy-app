import React from "react";
import styles from "./QuizTitle.module.css";
import { stringLiteral } from "@babel/types";
import { QuestionsButtons } from "./QuestionsButtons";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddAnswerButton from "../quizGenerator/AddAnswerButton";
import * as QuizService from "../services/QuizService";
import { QuizContext } from "../../contexts/QuizContext";

const Answer = ({ answer, isClicked, onClick }) => (
  <li className={styles.possibleAnswer}>
    <button
      className={`${styles.button} ${isClicked ? styles.button : ""}`}
      style={{
        backgroundColor: `${isClicked ? "rgb(255, 255, 153)" : "white"}`
      }}
      onClick={() => {
        onClick(answer.id);
      }}
    >
      {answer.id}
    </button>
    {answer.answer}
  </li>
);

const Spinner = () => (
  <div
    style={{
      textAlign: "center",
      textSize: "3em",
      marginTop: "12em",
      fontSize: "2em"
    }}
  >
    Proszę poczekać na wczytanie quizu...
  </div>
);

export default class Quiz extends React.Component {
  static contextType = QuizContext;

  //  idPytania this.state.currentQuestionId
  //  this.state.answers.idPytania.map(id => )

  state = {
    currentQuestionId: 0,
    answers: {},
    questions: {},
    areQuestionsLoading: true,
    isQuizComplete: false,
    selectedAnswers: [],
    score: 0
  };

  getQuestions() {
    const questions = this.context.quizes[0].questions;

    this.setState({
      ...this.state,
      questions,
      areQuestionsLoading: false
    });

    return questions;
  }

  getQuizResult() {
    const { questions, answers } = this.state;
    // const score = questions.reduce()
    // (currentScore, currentQuestion, currentQuestionId) => {
    //   const isAnswerCorrect = currentQuestion.answers[1].correct === true;
    //   // currentQuestion.correctAnswer === answers[currentQuestionId];
    //   return isAnswerCorrect ? currentScore + 1 : currentScore;
    // },
    // 0
    // );

    // Kiedy rozpoczynam quiz to ustawiam na jakim pytaniu startujesz, muszę do tego celu używać QuestionId a nie indexu pytania

    // return score / questions.length;

    const score = questions.reduce((accu, question) => {
      return question.correctAnswers.every(answer =>
        answers[question.id - 1].includes(`${answer}`)
      )
        ? accu + 1
        : accu;
    }, 0);
    return score / questions.length;
  }

  componentDidMount() {
    this.getQuestions();
  }

  handleAnswerClick = (answerId, questionId) => {
    const { answers, currentQuestionId } = this.state;

    const previousAnswers = this.state.answers[questionId]
      ? [...this.state.answers[questionId]]
      : [];

    this.setState({
      answers: {
        ...answers,
        [currentQuestionId]: [...new Set([...previousAnswers, answerId])]
      }
    });

    // this.state.answers.questionId.map(id =>
    //   this.setState({ selectedAnswers: id })
  };

  // if (previousAnswers[currentQuestionId] === answerId) {
  //   answers = Object.entries(previousAnswers)
  //     .filter(([key]) => key !== `${currentQuestionId}`)
  //     .reduce((answers, [key, value]) => ({ ...answers, [key]: value }), {});
  // } else {
  //   answers = {
  //     ...previousAnswers,
  //     [currentQuestionId]: answerId

  handleQuestionChangeClick = questionId => {
    const { answers: previousAnswers, currentQuestionId } = this.state;
    this.setState({ currentQuestionId: questionId });

    const currentQuestionCorrectAnwers = this.context.quizes[0].questions[
      questionId
    ].correctAnswers;
  };

  handleQuizCompleteClick = () => {
    if (window.confirm("Czy na pewno chcesz zakończyć quiz?")) {
      this.setState({ isQuizComplete: true });
    }
  };

  handleQuizStartClick = () => {
    this.setState({
      currentQuestionId: 0,
      answers: {},
      isQuizComplete: false
    });
  };

  isSelectedAnswer = (questionId, currentAnswerId) =>
    this.state.answers[questionId] &&
    this.state.answers[questionId].includes(currentAnswerId);

  renderQuestion(question, questionId) {
    let context = this.context;
    // console.log(context, "CONTEXT");
    let questionsIndexZero = context.quizes[0].questions[questionId];
    return (
      <div>
        <h1 className={styles.quizName}>{questionsIndexZero.question}</h1>
        <div className={styles.answerWrapper}>
          <ul className={styles.answerList}>
            {questionsIndexZero.answers.map(answer => (
              <Answer
                key={answer.id}
                answer={answer}
                className={styles.answer}
                isClicked={this.isSelectedAnswer(questionId, answer.id)}
                onClick={() => this.handleAnswerClick(answer.id, questionId)}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }

  renderQuestionsButtons() {
    const { currentQuestionId, questions } = this.state;

    return (
      <QuestionsButtons
        onQuestionChangeHandler={this.handleQuestionChangeClick}
        currentQuestionId={currentQuestionId}
        totalNumberOfQuestion={questions.length}
      />
    );
  }

  renderFinishQuizButton() {
    return (
      <div>
        <button
          className="addAnswerButton"
          style={{ marginTop: "1em", fontSize: "1em" }}
          onClick={this.handleQuizCompleteClick}
        >
          Zakończ Quiz
        </button>
      </div>
    );
  }

  renderStartQuizButton() {
    return (
      <div>
        <button
          className="addAnswerButton"
          style={{ fontSize: "2em", textAlign: "center" }}
          onClick={this.handleQuizStartClick}
        >
          Rozpocznij nowy Quiz
        </button>
      </div>
    );
  }

  renderQuizComplete() {
    const result = Math.floor(this.getQuizResult() * 100);

    return (
      <div>
        <p className={styles.score}>Wynik: {result}%</p>
        {this.renderStartQuizButton()}
      </div>
    );
  }

  render() {
    const {
      areQuestionsLoading,
      currentQuestionId,
      questions,
      isQuizComplete
    } = this.state;

    if (isQuizComplete) {
      return this.renderQuizComplete();
    }

    if (areQuestionsLoading) {
      return <Spinner />;
    }

    const currentQuestion = questions[currentQuestionId];

    return (
      <div className={styles.quizTitles}>
        <div className={styles.questionCard}>
          {this.renderQuestion(currentQuestion, currentQuestionId)}
          {this.renderQuestionsButtons()}
          {this.renderFinishQuizButton()}
        </div>
      </div>
    );
  }
}
