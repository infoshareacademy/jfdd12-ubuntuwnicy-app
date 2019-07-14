import React from "react";
import quizquestions from "./quizquestions.json";
import { QButton } from "./QButton";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

export class QuestionsButtons extends React.Component {
  onClickQButton = () => this.props.page();

  render() {
    return (
      <NavLink>
        <div>
          <ul>
            {quizquestions.map(quizquestionsFromJson => (
              <li>
                <QButton
                  key={quizquestionsFromJson.id}
                  question={quizquestionsFromJson}
                  onClickQButton={this.onClickQButton}
                  alink={quizquestionsFromJson.id}
                />
              </li>
            ))}
          </ul>
        </div>
      </NavLink>
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
