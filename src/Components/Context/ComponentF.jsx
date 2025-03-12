import React, { Component } from "react";
import { UserConsumer } from "./UserContext";

export class ComponentF extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
          {(username) => {
            return <div>hello {username}</div>;
          }}
        </UserConsumer>
        component F
      </div>
    );
  }
}

export default ComponentF;
