import React, { Component } from "react";

class CounterState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment() {
    this.setState(
      (prev) => ({
        count: prev.count + 1,
      }),
      () => console.log(this.state.count)
    );
  }
  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    const { name, heroName } = this.props;
    return (
      <>
        {name} {heroName}
        <div>count - {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </>
    );
  }
}

export default CounterState;
