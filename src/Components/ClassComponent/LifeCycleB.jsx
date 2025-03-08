import React, { Component } from "react";

export class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "vishwas",
    };

    console.log("LifecycleB constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleB getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleB componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifecycleB shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleB getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("lifecycleB componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("lifecycleB componentWillUnmount");
  }
  render() {
    console.log("Lifecycle B render");
    return <div>Lifecycle B</div>;
  }
}

export default LifeCycleB;
