import React from "react";
import "./QuizGenWrapperStyles.css";
import AnswersList from "./AnswersList";
import QuestionInput from "./QuestionInput";
import { QuizContext } from "../../contexts/QuizContext";
import QuizTitleInput from "./QuizTitleInput";
import RemoveQuestionButton from "./RemoveQuestionButton";
import AddQuestionButton from "./AddQuestionButton";
import AddAnswerButton from "./AddAnswerButton";
import { fetchQuiz, saveQuiz } from '../../services/QuizService'


const selectQuizByUniqueId = (quizes, uniqueId) => {
  return quizes.find(quiz => quiz.uniqueId === uniqueId)
}

export default class QuizGenWrapper extends React.Component {

  // static contextType = QuizContext;

  state = {
    quiz: [],
    quizes: [],
    isLoading: true
  };

  fetchAndUpdate() {
    const uniqueId = this.props.match.params.id
    this.setState({ isLoading: true })
    fetchQuiz(quizes => {
      // this.context.setQuizes(quizes)
      this.setState({
        quiz: selectQuizByUniqueId(quizes, uniqueId),
        quizes: quizes,
        isLoading: false
      })
    })

    // return () => { quizesRef.off('value') }
  }

  componentDidMount() {

    return this.fetchAndUpdate()
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.isLoading === false &&
      prevState.quiz.questions !== undefined
    ) {
      if (
        this.state.quiz.questions.length - 1 ===
        prevState.quiz.questions.length
      ) {
        this.scrollToBottom();
      }
    }
  }

  scrollToBottom = () => {
    this.element && this.element.scrollIntoView({ behavior: "smooth" });
  };

  handleTitleChange = newTitle => {
    this.setState({
      quiz: {
        ...this.state.quiz,
        title: newTitle
      }
    });
  };

  handleQuestionChange = (questionId, newQuestion) => {
    const newQuestions = this.state.quiz.questions.map(questionObject => {
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
      quiz: {
        ...this.state.quiz,
        questions: newQuestions
      }
    });
  };

  handleAnswerChange = (event, questionId) => {
    const answerId = event.target.name;
    const answerInput = event.target.value;

    const newQuestions = this.state.quiz.questions.map(question => {
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
      quiz: {
        ...this.state.quiz,
        questions: newQuestions
      }
    });
  };

  handleSaveQuiz = () => {
    // this.context.updateQuizToContext(this.state.quiz);

    const newQuizes = this.state.quizes.map(quiz => {
      if (quiz.uniqueId === this.state.quiz.uniqueId) {
        return this.state.quiz
      } else {
        return quiz
      }
    })
    this.setState({
      quizes: newQuizes
    },
      () => saveQuiz(this.state.quiz))
  };

  handleAddQuestion = () => {
    const newQuestionCard = {
      id: `${this.state.quiz.questions.length + 1}`,
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
    const newQuestions = [...this.state.quiz.questions, newQuestionCard];
    this.setState({
      quiz: {
        ...this.state.quiz,
        questions: newQuestions
      }
    });
  };

  handleRemoveQuestion = questionId => {
    if (this.state.quiz.questions.length > 1) {
      const newQuestions = this.state.quiz.questions.filter(
        question => question.id !== questionId
      );

      let questionIndex = 0;

      newQuestions.map(question => {
        questionIndex = questionIndex + 1;
        return (question.id = `${questionIndex}`);
      });
      this.setState({
        quiz: {
          ...this.state.quiz,
          questions: newQuestions
        }
      });
    }
  };

  handleAddAnswer = questionId => {
    const newQuestions = this.state.quiz.questions.map(question => {
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
      quiz: {
        ...this.state.quiz,
        questions: newQuestions
      }
    });
  };

  handleRemoveAnswer = (questionId, event) => {
    const answerId = event.target.name;

    let checkMinCorrectAnswers = this.checkCorrectAnswers(questionId);

    const newQuestions = this.state.quiz.questions.map(question => {
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

    this.setState({
      quiz: {
        ...this.state.quiz,
        questions: newQuestions
      }
    });
  };

  handleCheckboxChange = (questionId, event) => {
    const answerId = event.target.name;

    let checkMinCorrectAnswers = this.checkCorrectAnswers(questionId);

    const newQuestions = this.state.quiz.questions.map(question => {
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
      quiz: {
        ...this.state.quiz,
        questions: newQuestions
      }
    });
  };

  checkCorrectAnswers = questionId => {
    return this.state.quiz.questions[questionId - 1].answers.filter(
      answer => answer.correct === true
    ).length;
  };

  setRefForLastElement = (el, index, questionsCount) => {
    if (questionsCount === index) {
      this.element = el;
    }
  };

  renderQuestions = () => {
    const { questions } = this.state.quiz;
    const questionsCount = questions.length - 1;
    return questions.map((question, index) => (
      <div
        key={index}
        className={"quizGenInputs"}
        ref={el => this.setRefForLastElement(el, index, questionsCount)}
      >
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
          onAnswerChange={event => this.handleAnswerChange(event, question.id)}
        />
        <AddAnswerButton onClick={() => this.handleAddAnswer(question.id)} />
      </div>
    ));
  };

  render() {
    console.log(this.props.match.params.id);
    console.log(this.state);
    console.log(this.context);



    return (<>
      {this.state.isLoading ? <p>loader</p> :
        <>
          
          <div className="quizGenWrapper">
            <h1 className="quizGenHeader">STWÓRZ QUIZ</h1>
            <QuizTitleInput quizTitle={this.state.quiz.title} onChange={this.handleTitleChange} />
            {this.renderQuestions()}
            <div className='saveAndAddButtons'>
            <AddQuestionButton onClick={this.handleAddQuestion} />
            <button onClick={this.handleSaveQuiz} className="saveQuizButton">ZAPISZ QUIZ</button>
            </div>
          </div></>}
    </>
    );
  }
}