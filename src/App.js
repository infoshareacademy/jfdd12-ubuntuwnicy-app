import React, { Component } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import QuizGenWrapper from "./components/quizGenerator/QuizGenWrapper";
import QuizList from "./components/Quiz/QuizList.js";
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
import QuizesGenList from './components/quizGenerator/QuizesGenList'

const NoMatch = () => <h1>404</h1>;

class App extends Component {
  render() {
    return (
      <QuizProvider>
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/quizes-gen-list" component={QuizesGenList} />
              <Route exact path="/quizes-gen-list/:id" component={QuizGenWrapper} />
              <Route path="/quizlist" component={QuizList} />
              <Route path="/quiz/:id" component={Quiz} />
              <Redirect from="/home" to="/" />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </QuizProvider>
    );
  }
}

export default App;
