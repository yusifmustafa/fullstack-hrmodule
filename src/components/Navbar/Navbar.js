import {
  AppBar,
  Box,
  Button,
  FormGroup,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { GridMenuIcon } from "@mui/x-data-grid";
import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContextProvider";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";

const Navbar = () => {
  const context = useContext(UserContext);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <GridMenuIcon />
            </IconButton>
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
