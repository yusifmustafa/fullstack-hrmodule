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
  const { deletedUserId } = context;
  return (
    <div>
      <DialogTitle id="alert-dialog-title">
        {"İstifadəçinin Sistemdən Silinməsi "}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          İstifadəçini silmək istədiyinizə əminsinizmi? sildiyiniz İstifadəçini
          geri qaytarmaq mümkün olmayacaqdır.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => context.closeDialog()}>Geri Qayıt</Button>
        <Button
          onClick={() => {
            context.deleteUser(deletedUserId);
          }}
        >
          Sİl
        </Button>
      </DialogActions>
    </div>
  );
};

export default DeleteDialog;
