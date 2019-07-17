import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const Root = props => {
  return (
    <App />
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
