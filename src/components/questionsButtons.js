import React from "react";
import quizquestions from "./quizquestions.json";
import styles from "./QuizTitle.module.css";
import { QButton } from "./QButton";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

export class QuestionsButtons extends React.Component {
  changePage() {
    console.log("ugabuga");
    this.setState({ currentQuestion: +this.props.match.params.id });
  }

  render() {
    return (
      <div className={styles.boxButton}>
        {quizquestions.map(quizquestionsFromJson => (
          <QButton
            key={quizquestionsFromJson.id}
            question={quizquestionsFromJson}
            onClickQButton={this.onClickQButton}
            alink={quizquestionsFromJson.id}
            onClick={this.onClick}
          />
        ))}
      </div>
    );
  }
}

// number={quizquestionsFromJson.id}
// props = {number: quizquestionsFromJson.id}
// page={this.nextQuestion}
// nextQuestion = answerID => {
//   console.log(answerID);

//   this.setState({ currentQuestion: this.state.currentQuestion + 1 });
// };
