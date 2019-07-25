import React from "react";
import { QuizContext } from "../../contexts/QuizContext";
import { Button } from "@material-ui/core";
import { fetchQuiz, addNewQuiz } from "../../services/QuizService";
import { BrowserRouter as Route, Link } from "react-router-dom";

export class QuizesGenList extends React.Component {
  static contextType = QuizContext;

  state = {
    quizes: [],
    listIsLoading: false
  };

  componentDidMount() {
    this.setState({ listIsLoading: true });
    const quizesRef = fetchQuiz(quizes => {
      this.context.setQuizes(quizes);

      this.setState({ quizes, listIsLoading: false });
    });

    return () => {
      quizesRef.off("value");
    };
  }

  render() {
    console.log(this.state);
    console.log(this.context);

    const { listIsLoading } = this.state;

    return (
      <div>
        {listIsLoading ? (
          <p>loader</p>
        ) : (
          <div>
            <ul>
              {this.state.quizes.map(quiz => {
                return (
                  <li>
                    Tytuł Quizu: {quiz.title}, liczba pytan:{" "}
                    {quiz.questions.length}
                    <Link to={`/quizes-gen-list/${quiz.uniqueId}`}>
                      Edytuj Quiz
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Button onClick={event => addNewQuiz(this.state.quizes.length + 1)}>
              Dodaj nowy quiz
            </Button>
          </div>
        )}{" "}
      </div>
    );
  }
}
