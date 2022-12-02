import React, { useState } from "react";

export const UserContext = React.createContext({});

const INITIAL_STATE = {};
const UserContextProvider = (props) => {
  const [state, setState] = useState(INITIAL_STATE);
  return (
    <UserContext.Provider
      value={{
        ...state,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
