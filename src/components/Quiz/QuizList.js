import React from "react";
import styles from "./QuizTitle.module.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { fetchQuiz } from "../../services/QuizService";
import { Dimmer, Loader} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

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
  <Dimmer active>
  <Loader size='massive'>Loading</Loader>
</Dimmer>
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
    const { listIsLoading, quizes } = this.state;

    return (
      <div>
        {listIsLoading ? (
          <Spinner />
        ) : (
          <div>
            {this.state.quizes.map(quiz => (
              <QuizButton
                link={quizes.indexOf(quiz)+1}
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
    <Link to={`/quiz/${link-1}`}>
      <button className={`${styles.buttonQuestion} ${styles.buttonChooseQuiz}`}>Dołącz do quizu nr {link}</button>
    </Link>
  );
}
