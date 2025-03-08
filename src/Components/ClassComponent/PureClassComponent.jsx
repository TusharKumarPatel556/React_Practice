import React, { PureComponent } from "react";

class PureClassComponent extends PureComponent {
  render() {
    console.log("PureClass Component Render");
    return (
      <div>
        Pure Component {this.props.name} {}
      </div>
    );
  }
}

export default PureClassComponent;
