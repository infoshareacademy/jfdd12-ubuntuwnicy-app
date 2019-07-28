import React, { Component } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import QuizGenWrapper from "./components/quizGenerator/QuizGenWrapper";
import QuizList from "./components/Quiz/QuizList.js";
import Quiz from "./components/Quiz/Quiz";
import Home from "./Home";
import { QuizProvider } from "./contexts/QuizContext";
import { getUserNameByUniqueId } from './services/AuthService'
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
    uniqueId: '',
    userName: ''
  }


  onLoginFromApp(uniqueId) {

    getUserNameByUniqueId(uniqueId, (userName => {

      console.log(userName)
      this.setState({
        isLoggedIn: true,
        uniqueId: uniqueId,
        userName: userName
      })
    }))

  }

  onLogout(){
    this.setState({
      isLoggedIn: false,
      uniqueId: '',
      userName: ''
    })
  }

  render() {
    return (
      <QuizProvider>
        {console.log(this.state)}
        <Router>
          <div>
            <Navbar isLoggedIn={this.state.isLoggedIn} onClickLogout={this.onLogout.bind(this)}/>
            <Switch>
              <Route exact path="/" render={(props) =>
                <Home {...props} isLoggedIn={this.state.isLoggedIn} onLogin={this.onLoginFromApp.bind(this)} userName={this.state.userName} />
              } />
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
