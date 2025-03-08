import React, { useState } from "react";

function ChildCompo(props) {
  const [a, setA] = useState(2);

  return (
    <div>
      <button onClick={(a) => props.greetHandler("hello")}>Click</button>
    </div>
  );
}

export default ChildCompo;
