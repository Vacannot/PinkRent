import { ResetTv } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";

export const RemoveProductConfirmation = () => {
  const [openConfirmation, setOpenConfirmation] = useState(true);

  const handleClose = () => {
    setOpenConfirmation(false);
    console.log("modal component", openConfirmation);
  };

  const handleDeleteItem = () => {
    //something...
    handleClose();
  };

  return (
    <Dialog
      open={openConfirmation}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="responsive-dialog-title">
        {"Are you sure you want to remove this item?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>This action cannot be reverted.</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          NO
        </Button>
        <Button onClick={handleDeleteItem} autoFocus>
          YES
        </Button>
      </DialogActions>
    </Dialog>
  );
};
