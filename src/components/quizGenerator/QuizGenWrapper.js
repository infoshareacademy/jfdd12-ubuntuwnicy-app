import React from "react";
import "./QuizGenWrapperStyles.css";
import AnswersList from "./AnswersList";
import QuestionInput from "./QuestionInput";
import { QuizContext } from "../../contexts/QuizContext";
import QuizTitleInput from "./QuizTitleInput";
import RemoveQuestionButton from "../RemoveQuestionButton";
import AddQuestionButton from "./AddQuestionButton";
import AddAnswerButton from "./AddAnswerButton";

export default class QuizGenWrapper extends React.Component {
  state = {
    ...this.context.selectQuiz("1")
  };

  static contextType = QuizContext;

  componentDidUpdate(prevProps, prevState) {
    if (this.state.questions.length -1 === prevState.questions.length ) {
    this.scrollToBottom()
  }}

  scrollToBottom = () => {
    this.element && this.element.scrollIntoView({ behavior: 'smooth' })
  }

  handleTitleChange = newTitle => {
    this.setState({
      ...this.state,
      title: newTitle
    });
  };

  handleQuestionChange = (questionId, newQuestion) => {
    const newQuestions = this.state.questions.map(questionObject => {
      if (questionObject.id === questionId) {
        return {
          ...questionObject,
          question: newQuestion
        };
      } else {
        return questionObject;
      }
    });
    this.setState({
      ...this.state,
      questions: newQuestions
    });
  };

  handleAnswerChange = (event, questionId) => {
    const answerId = event.target.name;
    const answerInput = event.target.value;

    console.log(answerId + " " + answerInput);

    const newQuestions = this.state.questions.map(question => {
      if (question.id === questionId) {
        question.answers.map(answer => {
          if (answer.id === answerId) {
            answer.answer = answerInput;
            return answer;
          } else {
            return answer;
          }
        });
        return question;
      } else {
        return question;
      }
    });

    this.setState({
      ...this.state,
      questions: newQuestions
    });
  };

  handleSaveQuiz = () => {
    this.context.updateQuiz(this.state);
  };

  handleAddQuestion = () => {
    const newQuestionCard = {
      id: `${this.state.questions.length + 1}`,
      question: "wprowadź pytanie",
      answers: [
        {
          id: "1",
          answer: "",
          correct: true
        },
        {
          id: "2",
          answer: "",
          correct: true
        }
      ]
    };
    const newQuestions = [...this.state.questions, newQuestionCard];
    this.setState({
      ...this.state,
      questions: newQuestions
    });
  };

  handleRemoveQuestion = questionId => {
    if (this.state.questions.length > 1) {
      const newQuestions = this.state.questions.filter(
        question => question.id !== questionId
      );

      let questionIndex = 0;

      newQuestions.map(question => {
        questionIndex = questionIndex + 1;
        return (question.id = `${questionIndex}`);
      });
      this.setState({
        ...this.state,
        questions: newQuestions
      });
    }
  };

  handleAddAnswer = questionId => {
    const newQuestions = this.state.questions.map(question => {
      if (question.id === questionId && question.answers.length < 6) {
        const newAnswer = {
          id: `${question.answers.length + 1}`,
          answer: "",
          correct: false
        };
        question.answers.push(newAnswer);
        return question;
      } else {
        return question;
      }
    });

    this.setState({
      ...this.state,
      questions: newQuestions
    });
  };

  handleRemoveAnswer = (questionId, event) => {
    const answerId = event.target.name;

    let checkMinCorrectAnswers = this.checkCorrectAnswers(questionId);

    const newQuestions = this.state.questions.map(question => {
      if (question.id === questionId && question.answers.length > 2) {
        const newAnswers = question.answers.filter(answer => {
          if (checkMinCorrectAnswers <= 1 && answer.correct === true) {
            return answer;
          }
          return answer.id !== answerId;
        });

        let answerIndex = 0;

        newAnswers.map(answer => {
          answerIndex = answerIndex + 1;
          answer.id = `${answerIndex}`;

          return answer;
        });
        question.answers = newAnswers;
        return question;
      } else {
        return question;
      }
    });
    console.log(newQuestions);
    this.setState({
      ...this.state,
      questions: newQuestions
    });
  };

  handleCheckboxChange = (questionId, event) => {
    const answerId = event.target.name;

    let checkMinCorrectAnswers = this.checkCorrectAnswers(questionId);

    const newQuestions = this.state.questions.map(question => {
      if (question.id === questionId) {
        question.answers.map(answer => {
          if (answer.id === answerId) {
            if (checkMinCorrectAnswers <= 1 && answer.correct === true) {
              return answer;
            } else {
              answer.correct = !answer.correct;
            }
            return answer;
          } else {
            return answer;
          }
        });
        return question;
      } else {
        return question;
      }
    });

    this.setState({
      ...this.state,
      questions: newQuestions
    });
  };

  checkCorrectAnswers = questionId => {
    return this.state.questions[questionId - 1].answers.filter(
      answer => answer.correct === true
    ).length;
  };

  handleFetchQuizes = () => {
    this.context.fetchQuizToContext();
    setTimeout(() => {
      this.setState(this.context.selectQuiz("1"));
    }, 1500);
  };

  setRefForLastElement = (el, index, questionsCount) => {
    if (questionsCount === index) {
      this.element = el
    }
  }

  renderQuestions = () => {
    const {questions} = this.state
    const questionsCount = questions.length - 1
    return questions.map((question, index) => (
      <div key={index} className={"quizGenInputs"} ref={el => this.setRefForLastElement(el, index, questionsCount)}>
        <RemoveQuestionButton
          onClick={event => this.handleRemoveQuestion(question.id, event)}
        />
        <QuestionInput
          question={question}
          onChange={this.handleQuestionChange}
        />
        <AnswersList
          question={question}
          questionId={index}
          onClickRemoveAnswer={event =>
            this.handleRemoveAnswer(question.id, event)
          }
          onClickCheckboxChange={event =>
            this.handleCheckboxChange(question.id, event)
          }
          onAnswerChange={event =>
            this.handleAnswerChange(event, question.id)
          }
        />
        <AddAnswerButton
          onClick={() => this.handleAddAnswer(question.id)}
        />
      </div>
    ))
  }

  render() {
    console.log(this.state);
    console.log(this.context);

    const { title } = this.state;

    return (
      <>
      <button onClick={this.handleSaveQuiz} className="saveQuizButton">Zapisz Quiz</button>
      <div className="quizGenWrapper">
        <h1 className="quizGenHeader">STWÓRZ QUIZ</h1>
        <QuizTitleInput quizTitle={title} onChange={this.handleTitleChange} />
        {this.renderQuestions()}
        <AddQuestionButton onClick={this.handleAddQuestion} />
      </div>
      </>
    );
  }
}
