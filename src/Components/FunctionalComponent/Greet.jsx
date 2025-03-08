import React from "react";

const Greet = (props) => {
  console.log(props);
  return <div>{props.name}</div>;
};

export default Greet;
