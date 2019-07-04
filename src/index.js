import React, { Fragment } from "react";
import ReactDOM from "react-dom";
//import {
//  BrowserRouter as Router,
//  Route,
//  Switch,
//  Redirect
//} from "react-router-dom";
import './index.css';
import App from './App';
import { Navbar } from './components/Navbar/Navbar';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

//const NoMatch = () => <h1>404</h1>;

//const Root = props => {
//  return (
//    <Router>
//      <div>
//        <Navbar />
//        <div>
//          <Switch>
//            <Route exact path="/" component={App} />
//            <Route path="/" component={} />
//            <Route path="/" component={} />
//            <Route path="/" component={} />
//            <Redirect from="/home" to="/" />
//            <Route component={NoMatch} />
//          </Switch>
//        </div>
//      </div>
//    </Router>
//  );
//};
//
//ReactDOM.render(
//  <Root />,
//  document.getElementById("root")
//);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
