import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContextProvider";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import "./Navbar.css";
import Sidebar from "./Sidebar";
const Navbar = () => {
  const context = useContext(UserContext);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Sidebar />

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Employees
            </Typography>

            <Button onClick={() => context.navigateToAddUser()} color="inherit">
              <PersonAddAlt1Icon />
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
