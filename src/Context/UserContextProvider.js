import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext({});

const INITIAL_STATE = {};
const UserContextProvider = (props) => {
  const [state, setState] = useState(INITIAL_STATE);
  const navigate = useNavigate();
  return (
    <UserContext.Provider
      value={{
        ...state,
        navigateToHomePage: navigateToHomePage,
        navigateToAddUser: navigateToAddUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );

  function navigateToHomePage() {
    navigate("/");
  }
  function navigateToAddUser() {
    navigate("/adduser");
  }
};
export default UserContextProvider;
