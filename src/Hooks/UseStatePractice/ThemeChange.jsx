import react, { useState } from "react";

const ThemeChange = () => {
  const [theme, setTheme] = useState(true);

  const handleChange = () => {
    setTheme((prev) => !prev);
  };

  return (
    <div
      style={{
        height: "300px",
        width: "100%",
        background: `${theme ? "white" : "black"}`,
      }}
    >
      <input type="checkbox" onChange={handleChange} />
    </div>
  );
};

export default ThemeChange;
