import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContextProvider";

const DeleteDialog = () => {
  const context = useContext(UserContext);
  return (
    <div>
      <DialogTitle id="alert-dialog-title">
        {"Use Google's location service?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => context.closeDialog()}>Disagree</Button>
        <Button onClick={() => console.log("Agree")} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </div>
  );
};

export default DeleteDialog;
