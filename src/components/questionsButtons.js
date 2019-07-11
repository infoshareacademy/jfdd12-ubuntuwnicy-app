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
  render() {
    return (
      <div>
        <ul>
          {quizquestions.map(quizquestionsFromJson => (
            <li key={quizquestionsFromJson.id}>
              <QButton
                question={quizquestionsFromJson}
                onClickQButton={this.onClickQButton}
                alink={quizquestionsFromJson.id}
              />
            </li>
          ))}
        </ul>
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
