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

  state = {
    isLoggedIn: false,
    uniqueId: ''
  }


  onLoginFromApp(uniqueId) {

    this.setState({ isLoggedIn: true, uniqueId: uniqueId })
    alert("Użytkownik poprawnie zalogowany.")
  }

  render() {
    return (
      <QuizProvider>
        {console.log(this.state)}
        <Router>
          <div>
            <Navbar isLoggedIn={this.state.isLoggedIn} />
            <Switch>
              <Route exact path="/" render={(props) =>
                <Home {...props} isLoggedIn={this.state.isLoggedIn} onLogin={this.onLoginFromApp.bind(this)} />
              } />
              {this.state.isLoggedIn ? <> <Route exact path="/quizes-gen-list" component={QuizesGenList} />
                <Route exact path="/quizes-gen-list/:id" component={QuizGenWrapper} />
                <Route path="/quizlist" component={QuizList} />
                <Route path="/quiz/:id" component={Quiz} />
                <Redirect from="/home" to="/" /> </> : null}
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </QuizProvider>
    );
  }
}

export default App;
