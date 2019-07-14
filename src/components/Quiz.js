import React from "react";
import styles from "./QuizTitle.module.css";
import { stringLiteral } from "@babel/types";
import { QuestionsButtons } from "./QuestionsButtons";
import { Timer } from "./Timer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import quizquestions from "./quizquestions.json";
import AddAnswerButton from './quizGenerator/AddAnswerButton'
import * as QuizService from './services/quizService'

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
  <div style={{ textAlign: 'center', textSize: '3em', marginTop: '12em', fontSize: '2em'}}>
    Proszę poczekać na wczytanie quizu...
  </div>
);


export default class Quiz extends React.Component {
  state = {
    currentQuestionId: 0,
    answers: {},
    areQuestionsLoading: true,
    isQuizComplete: false,
  };

  getQuestions() {
    // return firebase.get()
    return this.state.answers = QuizService.GetQuiz()

    // return new Promise(resolve => {
    //   setTimeout(() => {
    //     resolve(exampleQuestions);
    //   }, 500);
    };

  getQuizResult() {
    const { questions, answers } = this.state;
    const score = questions.reduce((currentScore, currentQuestion, currentQuestionId) => {
      const isAnswerCorrect = currentQuestion.correctAnswer === answers[currentQuestionId];
      return isAnswerCorrect ? currentScore + 1 : currentScore;
    }, 0);

    return score / questions.length;
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

    let answers;

    if (previousAnswers[currentQuestionId] === answerId) {
      answers = Object
        .entries(previousAnswers)
        .filter(([key]) => key !== `${currentQuestionId}`)
        .reduce((answers, [key, value]) => ({...answers, [key]: value }), {});
    } 
    else {
      answers = {
        ...previousAnswers,
        [currentQuestionId]: answerId
      }
    }

    this.setState({ answers });
  };

  handleQuestionChangeClick = (questionId) => {
    this.setState({ currentQuestionId: questionId });
  };

  handleQuizCompleteClick = () => {
    if(window.confirm('Czy na pewno chcesz zakończyć quiz?')) {
      this.setState({ isQuizComplete: true });
    };
  };

  handleQuizStartClick = () => {
    this.setState({
      currentQuestionId: 0,
      answers: {},
      isQuizComplete: false
    });
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
          className={styles.buttonQuizEnd}
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
          className='addAnswerButton'
          style={{marginTop: '1em', fontSize: '3em'}}
          onClick={this.handleQuizStartClick}
        >
          Rozpocznij nowy quiz
        </button>
      </div>
    );
  }

  renderQuizComplete() {
    const result = Math.floor(this.getQuizResult() * 100);

    return (
      <div>
        <p className={styles.score}>Wynik: {result}%</p>
        { this.renderStartQuizButton() }
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
      return this.renderQuizComplete();
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
