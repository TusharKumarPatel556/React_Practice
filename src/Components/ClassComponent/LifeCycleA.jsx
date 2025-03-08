import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

export class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "vishwas",
    };

    console.log("LifecycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifecycleA shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("lifecycleA componentDidUpdate");
  }
  changeState = () => {
    this.setState({
      name: "code",
    });
  };

  componentWillUnmount() {
    console.log("lifecycleA componentWillUnmount");
  }

  render() {
    console.log("Lifecycle A render");
    return (
      <>
        <div>Lifecycle A</div>
        <button onClick={this.changeState}></button>
        <LifeCycleB />
      </>
    );
  }
}

export default LifeCycleA;
