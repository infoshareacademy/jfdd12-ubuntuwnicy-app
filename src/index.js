import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import "./index.css";
import App from "./App";
import { Navbar } from "./components/Navbar/Navbar";
import QuizGenWrapper from "./components/quizGenerator/QuizGenWrapper";
import { QuizTitle } from "./components/QuizTitle";

const NoMatch = () => <h1>404</h1>;
const Root = props => {
  return (
    <Router>
      <div>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/quiz-gen-wrapper" component={QuizGenWrapper} />
            <Route path="/quiz-title/:id" component={QuizTitle} />
            <Redirect from="/home" to="/" />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
