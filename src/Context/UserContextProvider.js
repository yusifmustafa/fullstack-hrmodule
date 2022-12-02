import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext({});

const INITIAL_STATE = {
  openModal: false,
};
const UserContextProvider = (props) => {
  const [state, setState] = useState(INITIAL_STATE);
  const navigate = useNavigate();
  return (
    <UserContext.Provider
      value={{
        ...state,
        navigateToHomePage: navigateToHomePage,
        navigateToAddUser: navigateToAddUser,
        openDialog: openDialog,
        closeDialog: closeDialog,
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

  function openDialog() {
    setState({ ...state, openModal: true });
  }
  function closeDialog() {
    setState({ ...state, openModal: false });
  }
};
export default UserContextProvider;
