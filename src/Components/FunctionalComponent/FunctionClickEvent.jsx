import React from "react";

function FunctionClickEvent() {
  function clickHandler() {
    console.log("clickHandler");
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default FunctionClickEvent;
