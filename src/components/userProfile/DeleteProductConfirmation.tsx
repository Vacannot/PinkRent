import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";
import { useAuth } from "../../backend/Context";
import { useTranslation } from "react-i18next";

export const RemoveProductConfirmation = ({ product }: { product: any }) => {
  const { deleteProduct } = useAuth();
  const [openConfirmation, setOpenConfirmation] = useState(true);
  const { t } = useTranslation();

  const handleClose = () => {
    setOpenConfirmation(false);
    console.log("modal component", openConfirmation);
  };

  const handleDeleteItem = () => {
    deleteProduct(product.id);
    // TODO: something... should happen pls :)))))))))))))))))))
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
        {t("are_you_sure_remove")}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>{t("this_action_cannot_revert")}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          {t("no_caps")}
        </Button>
        <Button onClick={handleDeleteItem} autoFocus>
          {t("yes_caps")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
