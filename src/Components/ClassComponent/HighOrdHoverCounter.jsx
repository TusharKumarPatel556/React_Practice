import React, { Component } from "react";
import UpdatedComponent from "./HocWithCounter";

class HighOrdHoverCounter extends Component {
  render() {
    const { count } = this.props;
    return (
      <div>
        <h2 onMouseOver={this.props.incrementCount}>
          Hovered {count} {this.props.name} times
        </h2>
      </div>
    );
  }
}

export default UpdatedComponent(HighOrdHoverCounter);
