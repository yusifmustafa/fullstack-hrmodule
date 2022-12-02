import React from "react";
import { AppBar, Button, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import ForwardIcon from "@mui/icons-material/Forward";
import { UserContext } from "../../Context/UserContextProvider";
const AddUserNavbar = () => {
  const context = React.useContext(UserContext);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              color="inherit"
              onClick={() => context.navigateToHomePage()}
            >
              <ForwardIcon />
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default AddUserNavbar;
