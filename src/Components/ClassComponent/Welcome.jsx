import React, { Component } from "react";
import Greet from "../FunctionalComponent/Greet";

class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor",
    };
  }

  changeMessage() {
    this.setState({
      message: "thank you for subscribing",
    });
  }

  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        <Greet name={this.props.name} />
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </>
    );
  }
}

export default Welcome;
