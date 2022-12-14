import * as React from "react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { IconButton, Box } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useState, useMemo } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useAuth } from "../../backend/Context";
import { auth } from "../../backend/firebase";
import { useTranslation } from "react-i18next";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export interface SnackbarMessage {
  message: string;
  key: number;
}

export interface SnackbarType {
  variant: "string";
}

function NotificationCard() {
  const { t } = useTranslation();
  const { deleteNotification, setProductRented } = useAuth();
  const [accept, setAccept] = React.useState(false);
  const [decline, setDecline] = React.useState(false);

  const handleClick = (variant: string, product: any, notification: any) => {
    if (variant === "accept") {
      deleteNotification(notification.id);
      setProductRented(product.id, true);
      setAccept(true);
      window.location.reload();
      return;
    }

    if (variant === "decline") {
      deleteNotification(notification.id);
      setDecline(true);
      window.location.reload();
      return;
    }
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setAccept(false);
    setDecline(false);
  };

  const { getNotificationsByUserID, getProductByID } = useAuth();

  const [notifications, setNotifications] = useState<any[]>([]);
  useMemo(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getNotificationsByUserID(user.uid).then(async (notifications) => {
          let arr = [];
          for (let notification of notifications) {
            const product = await getProductByID(notification.productID);
            arr.push({
              notification,
              product,
            });
          }
          setNotifications(arr);
        });
      }
    });
  }, [getNotificationsByUserID, getProductByID]);

  return (
    <>
      <>
        <Typography
          variant="h5"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {t("notifications")}
        </Typography>
        <Card
          sx={{
            width: "100%",
            "@media screen and (min-width: 800px)": { display: "none" },
            marginTop: "10%",
          }}
        >
          {notifications.map((item) => {
            const notification = item.notification;
            const product = item.product;
            return (
              <>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography>
                      {t("request_from")}
                      {notification.title}
                    </Typography>
                    <Typography variant="h6">
                      {notification.requester}
                    </Typography>
                    <Typography variant="h6">{product.title}</Typography>
                  </Box>
                  <Box>
                    <img
                      style={{ maxWidth: "70px", marginLeft: "-30px" }}
                      src={product.image}
                      alt="productImage"
                    />
                  </Box>
                  <Box>
                    <IconButton
                      aria-label="grant"
                      color="success"
                      onClick={() =>
                        handleClick("accept", product, notification)
                      }
                    >
                      <CheckIcon />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      color="error"
                      onClick={() =>
                        handleClick("decline", product, notification)
                      }
                    >
                      <CloseIcon />
                    </IconButton>
                  </Box>
                </Box>
                <hr
                  style={{
                    height: ".1rem",
                    width: "80%",
                    backgroundColor: "black",
                    opacity: ".2",
                  }}
                ></hr>
              </>
            );
          })}
        </Card>

        <Card
          sx={{
            width: "80%",
            mb: ".1rem",
            mt: "1rem",
            display: "flex",
            mx: "auto",
            "@media screen and (max-width: 800px)": { display: "none" },
          }}
        >
          <Typography variant="h5" sx={{ ml: "3.3rem" }}>
            {t("notifications")}
          </Typography>
        </Card>

        <Card
          sx={{
            width: "80%",
            mx: "auto",
            "@media screen and (max-width: 800px)": { display: "none" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              mt: ".5rem",
            }}
          >
            <Typography> {t("image")}</Typography>
            <Typography> {t("title")}</Typography>
            <Typography> {t("request_from")}</Typography>
            <Box sx={{ display: "flex" }}>
              <Typography> {t("approve")}</Typography>
              <Typography sx={{ ml: "1rem" }}> {t("decline")}</Typography>
            </Box>
          </Box>

          <hr
            style={{
              height: ".1rem",
              width: "90%",
              backgroundColor: "black",
              opacity: ".2",
            }}
          ></hr>
          {notifications.map((item) => {
            const notification = item.notification;
            const product = item.product;
            return (
              <>
                <Box
                  sx={{
                    display: "flex",
                    mx: "auto",
                  }}
                >
                  <CardContent
                    sx={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                    }}
                  >
                    <img
                      style={{ maxWidth: "100px", marginLeft: "-30px" }}
                      src={product.image}
                      alt="productImage"
                    />
                    <Typography variant="h5">{product.title}</Typography>
                    <Typography variant="h5">
                      {notification.requester}
                    </Typography>
                    <CardActions>
                      <IconButton
                        aria-label="delete"
                        color="success"
                        sx={{ mr: "2.5rem" }}
                        onClick={() =>
                          handleClick("accept", product, notification)
                        }
                      >
                        <CheckIcon />
                      </IconButton>
                      <IconButton
                        aria-label="delete"
                        color="error"
                        onClick={() =>
                          handleClick("decline", product, notification)
                        }
                      >
                        <CloseIcon />
                      </IconButton>
                    </CardActions>
                  </CardContent>
                </Box>

                <hr
                  style={{
                    height: ".1rem",
                    width: "90%",
                    backgroundColor: "black",
                    opacity: ".2",
                  }}
                ></hr>
              </>
            );
          })}
        </Card>
      </>

      <Snackbar open={accept} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {t("request_confirmed")}
        </Alert>
      </Snackbar>
      <Snackbar open={decline} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {t("request_declined")}
        </Alert>
      </Snackbar>
    </>
  );
}

export default NotificationCard;
