import { Box, Button, Tab } from "@mui/material";
import React, { useContext, useEffect } from "react";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import AddUserNavbar from "./AddUserNavbar";
import "./Adduser.css";
import Personal from "../Personal/Personal";
import Position from "../../Position/Position";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../Context/UserContextProvider";
const Adduser = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const context = useContext(UserContext);
  const { user, updatePerson, getUserInfoById } = context;
  console.log("user", user);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    getUserInfoById(id);
  }, [id]);

  const handleOnSubmit = (e) => {
    if (
      e.name === "" ||
      e.name === undefined ||
      e.surname === "" ||
      e.surname === undefined ||
      e.patronymic === "" ||
      e.patronymic === undefined ||
      e.username === "" ||
      e.username === undefined ||
      e.idnumber === "" ||
      e.idnumber === undefined ||
      e.pincode === "" ||
      e.pincode === undefined ||
      e.citizenship === "" ||
      e.citizenship === undefined
    ) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Xanaları tam doldurun",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    } else if (user.id === undefined || user.id === 0) {
      context.InsertPerson(user);
      context.navigateToHomePage();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "İstifadəçi Əlavə olundu",
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (user.id > 0) {
      updatePerson(id, user);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Dəyişikliklər yadda saxlanıldı",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    }
  };
  return (
    <>
      <AddUserNavbar />
      <div className="tabs">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab className="tab" label="Yenİ İŞÇİ Əlavə et" value="1" />
                <Tab className="tab" label="İşÇİNİN Vəzİfəsİ" value="2" />
                <Tab className="tab" label="Item Three" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Personal />
            </TabPanel>
            <TabPanel value="2">
              <Position />
            </TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
          </TabContext>
        </Box>
        <Button
          style={{ float: "right", marginRight: "2rem", marginTop: "20px" }}
          variant="contained"
          onClick={() => handleOnSubmit(user)}
        >
          ƏLAVƏ ET
        </Button>
      </div>
    </>
  );
};

export default Adduser;
