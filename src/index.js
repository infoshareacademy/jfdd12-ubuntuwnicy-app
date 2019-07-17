import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import "./index.css";
import { Navbar } from "./components/Navbar/Navbar";
import QuizGenWrapper from "./components/quizGenerator/QuizGenWrapper";
import Quiz from "./components/Quiz";
import App from './App';



const NoMatch = () => <h1>404</h1>;
const Root = props => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/quiz-gen-wrapper" component={QuizGenWrapper} />
          <Route path="/quiz" component={Quiz} />
          <Redirect from="/home" to="/" />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
