import React from "react";
import styles from "./QuizTitle.module.css";
import { Answer } from "./Quiz";
import * as QuizService from "../services/QuizService";

export class RenderQuestion extends React.Component {
  state = {
    currentQuestionId: 0,
    answers: {},
    areQuestionsLoading: true,
    isQuizComplete: false
  };

  getQuestions() {
    return (this.state.answers = QuizService.GetQuiz());
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

  render() {
    const {
      areQuestionsLoading,
      currentQuestionId,
      questions,
      isQuizComplete
    } = this.state;
    const { questionId, question } = this.props;

    const isSelectedAnswer = (questionId, currentAnswerId) => {
      const { answers } = this.state;
      return answers[questionId] === currentAnswerId;
    };

    return (
      <div>
        <h1 className={styles.quizName}>{question.question}</h1>
        <div className={styles.answerWrapper}>
          <ul className={styles.answerList}>
            {question.answers.map(answer => (
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
}
