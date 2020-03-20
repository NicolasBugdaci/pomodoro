import React, { Component } from "react";
import Button from "./Button";

class ButtonGroup extends Component {
  render() {
    return (
      <div>
        <Button
          text="start"
          onBtnClick={this.props.onStart}
          btnCssClasses="btn btn-success btn-space"
        />
        <Button
          text="stop"
          onBtnClick={this.props.onStop}
          btnCssClasses="btn btn-warning btn-space"
        />
        <Button
          text="reset"
          onBtnClick={this.props.onReset}
          btnCssClasses="btn btn-danger btn-space"
        />
      </div>
    );
  }
}

export default ButtonGroup;
