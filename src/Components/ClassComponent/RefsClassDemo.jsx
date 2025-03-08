import React, { Component } from "react";

export class RefsClassDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.cbref = null; //callback ref
    this.setCbRef = (element) => {
      this.cbref = element;
    };
    this.state = {};
  }

  componentDidMount() {
    // this.inputRef.current.focus();
    // console.log(this.inputRef);
    if (this.cbRef) {
      this.cbRef.focus();
    }
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.clickHandler}></button>
      </div>
    );
  }
}

export default RefsClassDemo;
