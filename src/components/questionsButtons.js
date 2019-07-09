import React from "react";
import quizquestions from "./quizquestions.json";
import { QButton } from "./QButton";

export class QuestionsButtons extends React.Component {
  onClickQButton = () => console.log("hello");

  render() {
    return (
      <div>
        {quizquestions.map(quizquestionsFromJson => (
          <QButton
            key={quizquestionsFromJson.id}
            question={quizquestionsFromJson}
            onClickQButton={this.onClickQButton}
          />
        ))}
      </div>
    );
  }
}

// number={quizquestionsFromJson.id}
// props = {number: quizquestionsFromJson.id}
