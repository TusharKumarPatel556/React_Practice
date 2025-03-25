import React from "react";
import ComponentE from "./ComponentE";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

const ComponentC = () => {
  return (
    <div>
      <UserContext.Provider value={"tushar"}>
        <ChannelContext.Provider value={"patel"}>
          <ComponentE />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default ComponentC;
