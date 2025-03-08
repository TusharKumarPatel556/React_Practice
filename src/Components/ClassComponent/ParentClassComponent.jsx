import React, { PureComponent } from "react";
import RegularClassComponent from "./RegularClassComponent";
import PureClassComponent from "./PureClassComponent";
import PureFunctionalComponent from "../FunctionalComponent/PureFunctionalComponent";

export class ParentClassComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "Vishwas",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Vishwas",
      });
    }, 2000);
  }

  render() {
    console.log("*************Parent Comp Render*************");
    return (
      <div>
        <h1>Parent Component</h1>
        <PureFunctionalComponent name={this.state.name} />
        {/* <RegularClassComponent name={this.state.name}></RegularClassComponent>
        <PureClassComponent name={this.state.name}></PureClassComponent> */}
      </div>
    );
  }
}

export default ParentClassComponent;
