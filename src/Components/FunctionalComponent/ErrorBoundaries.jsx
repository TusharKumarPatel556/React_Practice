import React from "react";

const ErrorBoundaries = ({ heroName }) => {
  if (heroName === "joker") {
    throw new Error("not a hero");
  }
  return <div>{heroName}</div>;
};

export default ErrorBoundaries;
