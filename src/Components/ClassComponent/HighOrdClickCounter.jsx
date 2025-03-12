import React, { Component } from "react";
import UpdatedComponent from "./HocWithCounter";

class HighOrdClickCounter extends Component {
  render() {
    const { count } = this.props;
    return (
      <div>
        <button onClick={this.props.incrementCount}>
          {" "}
          Clicked {count} {this.props.name} times
        </button>
      </div>
    );
  }
}

export default UpdatedComponent(HighOrdClickCounter);
