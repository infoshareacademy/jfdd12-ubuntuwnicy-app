import React from "react";
import styles from "./QuizTitle.module.css";
import { stringLiteral } from "@babel/types";
import { QuestionsButtons } from "./QuestionsButtons";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddAnswerButton from "../quizGenerator/AddAnswerButton";
import { fetchQuiz } from "../../services/QuizService";
import { Dimmer, Loader} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const Answer = ({ answer, isClicked, onClick }) => (
  <li className={styles.possibleAnswer}>
    <button
      className={`${styles.button} ${isClicked ? styles.button : ""}`}
      style={{
        backgroundColor: `${isClicked ? "#9ad16b" : "white"}`
      }}
      onClick={() => {
        onClick(answer.id);
      }}
    >
      {/* {answer.id} */}
      {answer.answer}
    </button>
  </li>
);

const Spinner = () => (
  <Dimmer active>
    <Loader size='massive'>Proszę czekać...</Loader>
  </Dimmer>
);

export default class Quiz extends React.Component {
  state = {
    currentQuestionId: 0,
    answers: {},
    questions: {},
    areQuestionsLoading: true,
    isQuizComplete: false,
    quizes: [],
    quizId: this.props.match.params.id
  };

  getQuizResult() {
    const { questions, answers } = this.state;
    console.log(questions.questions);
    const score = questions.questions.reduce(
      (currentScore, currentQuestion, currentQuestionId) => {
        const isAnswerCorrect =
          currentQuestion.correctAnswer === answers[currentQuestionId];
        return isAnswerCorrect ? currentScore + 1 : currentScore;
      },
      0
    );

    return score / questions.length;
  }

  componentDidMount() {
    this.setState(
      {
        areQuestionsLoading: true
      },
      () =>
        fetchQuiz(quizes => {
          // console.log(quizes);
          // console.log(
          //   quizes.find(quiz => quiz.id == this.props.match.params.id)
          // );
          this.setState({
            quizes,
            areQuestionsLoading: false,
            questions: quizes.find(
              quiz => quizes.indexOf(quiz) == this.props.match.params.id
            )
          });
        })
    );
  }

  handleAnswerClick = answerId => {
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
    }

    this.setState({ answers });
  };

  handleQuestionChangeClick = questionId => {
    this.setState({ currentQuestionId: questionId });
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

  renderQuestion(question, questionId, quizId) {
    console.log(this.state);
    let questionsIndexZero = this.state.questions.questions[questionId];
    console.log(questionsIndexZero);
    return (
      <div>
        <h1 className={styles.quizTitleName}>{`${this.state.quizes[quizId].title} ${Number(quizId)+1}`}</h1>
        <div className={styles.answerWrapper}>
        <h1 className={styles.quizName}>{questionsIndexZero.question}</h1>
          <ul className={styles.answerList}>
            {questionsIndexZero.answers.map(answer => (
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
    const { currentQuestionId, questions, quizes } = this.state;

    return (
      <QuestionsButtons
        onQuestionChangeHandler={this.handleQuestionChangeClick}
        currentQuestionId={currentQuestionId}
        totalNumberOfQuestion={questions.questions.length}
        questions={questions}
      />
    );
  }

  renderFinishQuizButton() {
    return (
      <div className={styles.finishQuizWrap}>
        <button
          className={styles.finishQuiz}
          onClick={this.handleQuizCompleteClick}
        >
          ZAKOŃCZ QUIZ
        </button>
      </div>
    );
  }

  renderStartQuizButton() {
    return (
      <div className={styles.startNewQuizWrap}>
      <Link to={'/quizlist'}>
        <button
          className={styles.startNewQuiz}
          onClick={this.handleQuizStartClick}
        >
          Rozpocznij nowy Quiz
        </button>
        </Link>
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
      quizId,
      questions,
      isQuizComplete
    } = this.state;

    if (isQuizComplete) {
      return this.renderQuizComplete();
    }

    if (!questions || areQuestionsLoading) {
      // debugger;
      return <Spinner />;
    }

    console.log(questions);
    const currentQuestion = questions[currentQuestionId];

    return (
      <div className={styles.quizTitles}>
        <div className={styles.questionCard}>
          {this.renderQuestion(currentQuestion, currentQuestionId, quizId)}
          {this.renderQuestionsButtons(questions)}
          {this.renderFinishQuizButton()}
        </div>
      </div>
    );
  }
}
