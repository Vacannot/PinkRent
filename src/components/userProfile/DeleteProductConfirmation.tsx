import {
  Box,
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
  };

  return (
    <Dialog
      open={openConfirmation}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        {"Use Google's location service?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to remove this item?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          NO
        </Button>
        <Button onClick={handleClose} autoFocus>
          YES
        </Button>
      </DialogActions>
    </Dialog>
  );
};
