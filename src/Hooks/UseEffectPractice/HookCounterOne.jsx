import React, { useState, useEffect } from "react";

const HookCounterOne = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log(`running use Effect ${count} times`);
    document.title = `You Clicked ${count} times`;
  }, []);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount((prev) => prev + 1)}>
        Click {count} times
      </button>
    </div>
  );
};

export default HookCounterOne;
