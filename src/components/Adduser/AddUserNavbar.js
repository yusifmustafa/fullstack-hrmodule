import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { GridMenuIcon } from '@mui/x-data-grid';
import React from 'react'

const AddUserNavbar = () => {
  return (
    <>
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
            <Button color="inherit">Add User</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default AddUserNavbar;