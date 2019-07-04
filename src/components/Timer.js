import React from "react";

const root = document.getElementById("root");

export class Timer extends React.Component {
  render() {
    return (
      <div>
        <div style={{ float: "right" }}>00:00</div>
      </div>
    );
  }
}
