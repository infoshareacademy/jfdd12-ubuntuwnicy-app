import React from "react";
import styles from "./QuizTitle.module.css";
import { stringLiteral } from "@babel/types";
import { QuestionsButtons } from "./QuestionsButtons";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddAnswerButton from "../quizGenerator/AddAnswerButton";
import * as QuizService from "../services/QuizService";
import { QuizContext } from "../../contexts/QuizContext";
import QuizList from "./QuizList";

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

  state = {
    currentQuizId: this.props.match.params.id - 1,
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
    const { questions, answerss } = this.state;
    const score = questions.reduce(
      (currentScore, currentQuestion, currentQuestionId) => {
        const isAnswerCorrect = currentQuestion.answers[1].correct === true;
        // currentQuestion.correctAnswer === answers[currentQuestionId];
        return isAnswerCorrect ? currentScore + 1 : currentScore;
      },
      0
    );

    return score / questions.length;
  }

  componentDidMount() {
    this.getQuestions();
  }

  handleAnswerClick = (answerId, questionId) => {
    // this.setState({
    //   ...this.state,
    //   selectedAnswers: this.state.selectedAnswers.push(answerId)
    // });}

    const { answers: previousAnswers, currentQuestionId } = this.state;

    let answers;

    if (previousAnswers[currentQuestionId] === answerId) {
      answers = Object.entries(previousAnswers)
        .filter(([key]) => key !== `${currentQuestionId}`)
        .reduce((answers, [key, value]) => ({ ...answers, [key]: value }), {});
    } else {
      answers = {
        ...previousAnswers,
        [currentQuestionId]: answerId
      };
    }}

    // this.setState({ answers });
  // };

  // handleQuestionChangeClick = questionId => {
    // this.setState({ currentQuestionId: questionId });

    // const currentQuestionCorrectAnwers = this.context.quizes[0].questions[
    //   questionId
    // ].correctAnswers;
    // const result = this.state.selectedAnswers === currentQuestionCorrectAnwers; //find proper method

    // if (result) addScore();
    // end;

  //   this.setState({
  //     currentQuestionId: questionId,
  //     ...this.state,
  //     selectedAnswers: []
  //   });
  // };
    
  handleQuestionChangeClick = questionId => {
  this.setState({ currentQuestionId: questionId });
  };
  
  handleQuizChangeClick = quizId => {
    this.setState({ currentQuizId: quizId });
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

  isSelectedAnswer(questionId, currentAnswerId) {
    const { answers } = this.state;
    return answers[questionId] === currentAnswerId;
  }

  renderQuestion(question, questionId) {
    let context = this.context;
    console.log(context, "CONTEXT");
    let questionsIndexZero = context.quizes[this.state.currentQuizId].questions[questionId];
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

  renderQuiz(quiz, quizId){
    const { currentQuizId } = this.state;
    console.log(currentQuizId)
    console.log(this.context.quizes[this.state.currentQuizId])
      return (
        
        <div>
            <h1 className>{this.context.quizes[this.state.currentQuizId].title}</h1>
        </div>
      )
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
    const { match } = this.props;
    const {
      areQuestionsLoading,
      currentQuestionId,
      currentQuizId,
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
    const currentQuiz = this.context.quizes[currentQuizId]

    return (
      <div className={styles.quizTitles}>
        <h1>{this.renderQuiz(currentQuiz, currentQuizId)}</h1>
        <div className={styles.questionCard}>
          {this.renderQuestion(currentQuestion, currentQuestionId)}
          {this.renderQuestionsButtons(currentQuizId)}
          {this.renderFinishQuizButton()}
        </div>
      </div>
    );
  }
}
