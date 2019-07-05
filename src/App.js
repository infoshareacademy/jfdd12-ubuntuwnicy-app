import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import QuizGenWrapper from "./components/quizGenerator/QuizGenWrapper";
import { QuizTitle } from "./components/QuizTitle";

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className="mainTitle">
        <h1>sQuizYou</h1>
        <h2>Witamy!</h2>
      </div>
      <QuizGenWrapper />
      <QuizTitle />
    </div>
  );
}

export default App;
