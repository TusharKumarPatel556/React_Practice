import React from "react";

const PureFunctionalComponent = ({ name }) => {
  console.log("rendering memo component");
  return <div>{name}</div>;
};

export default React.memo(PureFunctionalComponent);
