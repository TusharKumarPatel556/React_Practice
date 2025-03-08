import React, { Component } from "react";
import ChildCompo from "./ChildCompo";

class ChildCommunParrent extends Component {
  constructor() {
    super();
    this.state = {
      parentname: "Tkp",
    };
    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(a) {
    alert(`hello ${this.state.parentname}  ${a}`);
  }

  render() {
    return (
      <div>
        <ChildCompo greetHandler={this.greetParent} />
      </div>
    );
  }
}

export default ChildCommunParrent;
