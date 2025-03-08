// import React, { Component } from "react";

// class ConditionalRendering extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoggedin: false,
//     };
//   }

//   render() {
//     if (this.state.isLoggedin) {
//       return <div>Welcome Vishwas</div>;
//     }
//     return <div>Welcome Guest</div>;

//     // return (
//     //   <div>
//     //     <div>Welcome Vishwas</div>
//     //     <div>Welcome Guest</div>
//     //   </div>
//     // );
//   }
// }

// export default ConditionalRendering;
import React, { Component } from "react";

class ConditionalRendering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedin: false,
    };
  }

  toggleLogin = () => {
    this.setState((prevState) => ({
      isLoggedin: !prevState.isLoggedin,
    }));
  };

  render() {
    return (
      <div>
        {this.state.isLoggedin ? (
          <div>Welcome Vishwas</div>
        ) : (
          <div>Welcome Guest</div>
        )}
        <button onClick={this.toggleLogin}>
          {this.state.isLoggedin ? "Logout" : "Login"}
        </button>
      </div>
    );

    // Alternative way using ternary operator:
    // return <div>{this.state.isLoggedin ? "Welcome Vishwas" : "Welcome Guest"}</div>;
  }
}

export default ConditionalRendering;
