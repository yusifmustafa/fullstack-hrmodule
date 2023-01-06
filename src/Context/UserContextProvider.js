import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../utils/Api";
export const UserContext = React.createContext({});
const URL_ALL_USER = "/";
const URL_USER_INFO_BY_ID = "/{id}";
const URL_ADD_USER = "/";
const URL_UPDATE_USER = "/{id}";
const URL_DELETE_USER = "/{id}";
const URL_ALL_POSITIONS = "/api/position";
const URL_ALL_DEPARTMENTS = "/api/department";
const INITIAL_STATE = {
  openModal: false,
  user: {},
  userList: [],
  deletedUserId: {},
  positions: [],
  department: [],
};
console.log("userrrrr", INITIAL_STATE.user);
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
        getAllPosition: getAllPosition,
        getAllDepartment: getAllDepartment,
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
    setState({ user: {} });
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
      setState({ ...state, userList: responseUsers, openModal: false });
    });
  }

  function getUserInfoById(id) {
    Api.get(URL_USER_INFO_BY_ID.replace("{id}", id)).then((rsp) => {
      const responseUser = rsp?.data;
      responseUser.map((item) => {
        console.log("itemmm", item);
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
          posId: item.posId,
          depId: item.depId,
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
    // setState({ user: {} });
  }

  function updatePerson(id, user) {
    const url = URL_UPDATE_USER.replace("{id}", id);
    Api.put(url, user).then((rsp) => {
      const responseData = rsp?.data;
      console.log("responseDatazzz", responseData);
      setState({ ...state, user: responseData });
    });
  }

  function getAllPosition() {
    Api.get(URL_ALL_POSITIONS).then((rsp) => {
      const responseData = rsp?.data;
      console.log("rspData", responseData);
      setState({ ...state, positions: responseData });
    });
  }

  function getAllDepartment() {
    Api.get(URL_ALL_DEPARTMENTS).then((rsp) => {
      const responseData = rsp?.data;
      console.log("department responseData: ", responseData);
      setState({ ...state, department: responseData });
    });
  }
};
export default UserContextProvider;
