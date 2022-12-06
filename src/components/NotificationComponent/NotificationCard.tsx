import * as React from "react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CarImage from "../../assets/Rectangle42.png";
import { IconButton, Box } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useAuth } from "../../backend/Context";
import { auth } from "../../backend/firebase";

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
  const [accept, setAccept] = React.useState(false);
  const [decline, setDecline] = React.useState(false);

  const handleClick = (variant: string) => {
    if (variant === "accept") {
      setAccept(true);
      console.log("accept");
      return;
    }

    if (variant === "decline") {
      setDecline(true);
      console.log("decline");
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

  const { getNotificationsByUserID } = useAuth();

  const [notifications, setNotifications] = useState<any[]>([]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getNotificationsByUserID(user.uid).then((notifications) => {
          setNotifications(notifications);
        });
      }
    });
  }, [getNotificationsByUserID]);

  return (
    <>
      {notifications.map((notification) => {
        return (
          <>
            <Card
              sx={{
                width: "100%",
                "@media screen and (min-width: 800px)": { display: "none" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "end",
                }}
              >
                <Box>
                  <Typography variant="h6">
                    Max Andersson {notification.requester}
                  </Typography>
                  <Typography>Request to rent {notification.title}</Typography>
                </Box>
                <Box>
                  <IconButton
                    aria-label="grant"
                    color="success"
                    onClick={() => handleClick("accept")}
                  >
                    <CheckIcon />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    color="error"
                    onClick={() => handleClick("decline")}
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
                NOTIFICATIONS
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
                <Typography> Image</Typography>
                <Typography> Title</Typography>
                <Typography> Reguest from</Typography>
                <Box sx={{ display: "flex" }}>
                  <Typography> Approve</Typography>
                  <Typography sx={{ ml: "1rem" }}> Decline</Typography>
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

              <Box
                sx={{
                  display: "flex",
                  mx: "auto",
                  "@media screen and (max-width: 800px)": { display: "none" },
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
                  <img src={notification.image} alt="productImage" />
                  <Typography gutterBottom variant="h5" component="div">
                    {notification.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {notification.requester}
                  </Typography>
                  <CardActions>
                    <IconButton
                      aria-label="delete"
                      color="success"
                      sx={{ mr: "2.5rem" }}
                      onClick={() => handleClick("accept")}
                    >
                      <CheckIcon />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      color="error"
                      onClick={() => handleClick("decline")}
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
            </Card>
          </>
        );
      })}

      <Snackbar open={accept} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Request Confirmed! Renter will be notified!
        </Alert>
      </Snackbar>
      <Snackbar open={decline} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Request Declined! Renter will be notified!
        </Alert>
      </Snackbar>
    </>
  );
}

export default NotificationCard;
