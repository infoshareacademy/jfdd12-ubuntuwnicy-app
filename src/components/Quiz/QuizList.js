import React from "react";
import styles from "./QuizTitle.module.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { fetchQuiz } from "../../services/QuizService";

const Button = ({ children, disabled = false, onClick, isQuestionNumber }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`${styles.buttonQuestion} ${styles.buttonQuestionNumber}`}
  >
    {children}
  </button>
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
    Proszę poczekać trwa wczytywanie listy quizów...
  </div>
);
export default class QuizList extends React.Component {

  state = {
    listIsLoading: true
  };

  componentDidMount() {
    this.setState({ listIsLoading: true });
    fetchQuiz(quizes => {
      this.setState({ quizes, listIsLoading: false });
      console.log(this.state);
    });
  }

  render() {
    const { listIsLoading } = this.state;

    return (
      <div>
        {listIsLoading ? (
          <Spinner />
        ) : (
          <div>
            {this.state.quizes.map(quiz => (
              <QuizButton
                link={quiz.id}
              />
            ))}
          </div>
        )}{" "}
      </div>
    );
  }
}

function QuizButton(props) {
  const { key, onClick, link, currentQuizId } = props;

  return (
    <Link to={`/quiz/${link}`}>
      <button className={styles.buttonQuestion}>asd</button>
    </Link>
  );
}
