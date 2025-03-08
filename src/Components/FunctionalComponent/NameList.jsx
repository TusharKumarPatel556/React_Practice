import React from "react";

const NameList = () => {
  const names = ["Bruce", "Clark", "Diana"];
  const nameList = names.map((name) => <h2>{name}</h2>);
  return (
    <div>
      {nameList}
      {/* {names.map((name) => (
        <h2>{name}</h2>
      ))}
      <div>{names[0]}</div>
      <div>{names[1]}</div>
      <div>{names[2]}</div> */}
    </div>
  );
};

export default NameList;
