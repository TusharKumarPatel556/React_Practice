import React, { useState, useEffect } from "react";

const Hookmouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log(`useeffect called`);
    window.addEventListener("mousemove", logMousePosition);
    return () => {
      console.log("unmounted cleaning started");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      Hooks X -{x} Y-{y}
    </div>
  );
};

export default Hookmouse;
