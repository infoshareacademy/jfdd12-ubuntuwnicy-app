import React from "react";
import styles from "./QuizTitle.module.css";
import { stringLiteral } from "@babel/types";
import { QuestionsButtons } from "./QuestionsButtons";
import { Timer } from "./Timer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import quizquestions from "./quizquestions.json";
import exampleQuestions from './example-questions';

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

const Spinner = () => (
  <div style={{ textAlign: 'center', textSize: '3em' }}>
    Pytania sie wczytuja
  </div>
);

export default class Quiz extends React.Component {
  state = {
    currentQuestionId: 0,
    answers: {},
    random: Math.random(),
    areQuestionsLoading: true,
    isQuizComplete: false,
  };

  getQuestions() {
    // return firebase.get()

    return new Promise(resolve => {
      setTimeout(() => {
        resolve(exampleQuestions);
      }, 500);
    });
  }

  componentDidMount() {
    this.getQuestions()
      .then(questions => {
        this.setState({
          questions,
          areQuestionsLoading: false
        });
      })
      .catch(error => {
        console.error(error);

        this.setState({
          areQuestionsLoading: false
        });
      });
  }

  handleAnswerClick = answerId => {
    const { 
      answers: previousAnswers,
      currentQuestionId
    } = this.state;

    const answers = {
      ...previousAnswers,
      [currentQuestionId]: answerId
    };

    this.setState({ answers });
  };

  handleQuestionChangeClick = (questionId) => {
    this.setState({ currentQuestionId: questionId });
  };

  handleQuizCompleteClick = () => {
    this.setState({ isQuizComplete: true });
  };

  isSelectedAnswer(questionId, currentAnswerId) {
    const { answers } = this.state;
    return answers[questionId] === currentAnswerId;
  }

  renderQuestion(question, questionId) {
    return (
      <div>
        <h1 className={styles.quizName}>
            { question.question }
        </h1>
        <div className={styles.answerWrapper}>
            <ul className={styles.answerList}>
              { question.answers.map(answer => (
                <Answer
                  key={answer.id}
                  answer={answer}
                  className={styles.answer}
                  isClicked={this.isSelectedAnswer(questionId, answer.id)}
                  onClick={() => this.handleAnswerClick(answer.id)}
                />
              ))}
            </ul>
          </div>
      </div>
    );
  }

  renderQuestionsButtons() {
    const {currentQuestionId, questions } = this.state;

    return <QuestionsButtons
      onQuestionChangeHandler={this.handleQuestionChangeClick}
      currentQuestionId={currentQuestionId}
      totalNumberOfQuestion={questions.length}
    />
  }

  renderFinishQuizButton() {
    return (
      <div>
        <button
          style={{marginTop: '1em', fontSize: '3em'}}
          onClick={this.handleQuizCompleteClick}
        >
          Zakoncz quiz
        </button>
      </div>
    );
  }

  renderStartQuizButton() {
    return (
      <div>
        <button
          style={{marginTop: '1em', fontSize: '3em'}}
          onClick={this.handleQuizStartClick}
        >
          Rozpocznij nowy quiz
        </button>
      </div>
    );
  }

  renderQuizComplete() {
    return (
      <div className={styles.quizTitles}>
        <p>Wynik: 100%</p>
        <p></p>
      </div>
    );
  }

  render() {
    const {
      areQuestionsLoading,
      currentQuestionId,
      questions,
      isQuizComplete,
    } = this.state;

    if (isQuizComplete) {
      return <div>wynik</div>
    }

    if (areQuestionsLoading) {
      return <Spinner/>;
    }

    const currentQuestion = questions[currentQuestionId];

    return (
      <div className={styles.quizTitles}>
        <div className={styles.questionCard}>
          { this.renderQuestion(currentQuestion, currentQuestionId) }
          { this.renderQuestionsButtons() }
          { this.renderFinishQuizButton() }
        </div>
      </div>
    );
  }
}
