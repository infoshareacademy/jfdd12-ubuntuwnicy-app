import React from "react";
import styles from "./QuizTitle.module.css";
export class Timer extends React.Component {
  state = {
    now: 30
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        now: this.state.now - 1
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div>
        <div className={this.props.className}>
          {this.state.now > 0 ? this.state.now : "0"}
        </div>
      </div>
    );
  }
}
