import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../utils/Api";
export const UserContext = React.createContext({});
const URL_ALL_USER = "/";
const URL_USER_INFO_BY_ID = "/{id}";
const URL_ADD_USER = "/";
const URL_UPDATE_USER = "/{id}";
const URL_DELETE_USER = "/{id}";
const INITIAL_STATE = {
  openModal: false,
  user: {},
  userList: [],
  deletedUserId: {},
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
        handleOnChange: handleOnChange,
        getAllUser: getAllUser,
        deleteUser: deleteUser,
        getUserInfoById: getUserInfoById,
        InsertPerson: InsertPerson,
        updatePerson: updatePerson,
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

  function openDialog(id) {
    setState({ ...state, openModal: true, deletedUserId: id });
  }
  function closeDialog() {
    setState({ ...state, openModal: false });
  }

  function handleOnChange(event) {
    const { name, value } = event;
    setState(
      Object.assign({}, state, {
        user: Object.assign({}, state.user, { [name]: value }),
      })
    );
  }
  function getAllUser() {
    Api.get(URL_ALL_USER).then((rsp) => {
      const responseUsers = rsp?.data;
      setState({ ...state, userList: responseUsers });
    });
  }

  function getUserInfoById(id) {
    Api.get(URL_USER_INFO_BY_ID.replace("{id}", id)).then((rsp) => {
      const responseUser = rsp?.data;
      responseUser.map((item) => {
        const obj = {
          id: item.id,
          name: item.name,
          surname: item.surname,
          patronymic: item.patronymic,
          username: item.username,
          identification: item.identification,
          idnumber: item.idnumber,
          birthPlace: item.birthPlace,
          birthDate: item.birthDate,
          pincode: item.pincode,
          bloodGroupId: item.bloodGroupId,
          maritalStatus: item.maritalStatus,
          gender: item.gender,
          citizenship: item.citizenship,
          idprovider: item.idprovider,
          militaryStatus: item.militaryStatus,
        };
        setState({ ...state, user: obj });
      });
    });
  }

  function deleteUser(id) {
    Api.delete(URL_DELETE_USER.replace("{id}", id)).then(() => {
      getAllUser();
    });
  }

  function InsertPerson(user) {
    Api.post(URL_ADD_USER, user).then(() => {
      getAllUser();
    });
    setState({ user: {} });
  }

  function updatePerson(id, user) {
    console.log("idddd;", id);
    console.log("userrr: ", user);
    const url = URL_UPDATE_USER.replace("{id}", id);
    Api.put(url, user).then((rsp) => {
      const responseData = rsp?.data;
      setState({ ...state, user: responseData });
    });
  }
};
export default UserContextProvider;
