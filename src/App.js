import React, { Component } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import QuizGenWrapper from "./components/quizGenerator/QuizGenWrapper";
import Quiz from "./components/Quiz/Quiz";
import Home from "./Home";
import { QuizProvider } from "./contexts/QuizContext";
import { ResultProvider } from "./contexts/ResultContext";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import quizes from "./data/quizes.json";

const NoMatch = () => <h1>404</h1>;

class App extends Component {
  state = {
    quizes
  };

  addQuiz(newQuiz) {
    this.setState({ ...this.state.quizes, newQuiz });
  }

  render() {
    return (
      <QuizProvider
        value={{
          quizes: this.state.quizes,
          addQuiz: this.addQuiz
        }}
      >
        <ResultProvider value={{ results: this.state.results }}>
          <Router>
            <div>
              <Navbar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/quiz-gen-wrapper" component={QuizGenWrapper} />
                <Route path="/quiz" component={Quiz} />
                <Redirect from="/home" to="/" />
                <Route component={NoMatch} />
              </Switch>
            </div>
          </Router>
        </ResultProvider>
      </QuizProvider>
    );
  }
}

export default App;
