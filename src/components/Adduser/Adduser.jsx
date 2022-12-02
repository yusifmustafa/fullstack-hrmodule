import { Box, Tab } from "@mui/material";
import React from "react";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import AddUserNavbar from "./AddUserNavbar";
import "./Adduser.css";
import Personal from "../Personal/Personal";
const Adduser = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
                <Tab className="tab" label="Yeni İşçi Əlavə et" value="1" />
                <Tab className="tab" label="Item Two" value="2" />
                <Tab className="tab" label="Item Three" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Personal />
            </TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
          </TabContext>
        </Box>
      </div>
    </>
  );
};

export default Adduser;
