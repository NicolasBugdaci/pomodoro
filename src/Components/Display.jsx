import React, { Component } from "react";

class Display extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h4>{this.props.title}</h4>
        <h5>Durée : {this.props.timerValue}</h5>
      </React.Fragment>
    );
  }
}

export default Display;
