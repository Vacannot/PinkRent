import * as React from "react";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import LogoDesktop from "../../assets/LogoDesktop.png";
import LogoMobile from "../../assets/LogoMobile.png";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

export default function Header() {
  const CustomizedButton = styled(Button)`
    color: #626262;

    background-color: #ffffff;

    :hover {
      color: white;
      background-color: #fb77c2;
    }

    ":hover $icon" {
      color: white;
      background-color: white;
    }
  `;

  const { width } = useWindowDimensions();
  if (width < 600)
    return (
      <Box
        sx={{
          width: "100vw",
          height: 64,
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "column",
          position: "absolute",
        }}
      >
        <img src={LogoMobile} alt="yo" />
        <Box
          sx={{
            height: 0,
            width: "70vw",
            borderBottom: 1,
            borderColor: "black",
          }}
        ></Box>
      </Box>
    );
  return (
    <Box
      sx={{
        backgroundColor: "white",
        boxShadow: 3,
        height: 100,
        width: "100vw",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          justifyContent: "space-evenly",
          height: "auto",
          width: 430,
          alignItems: "center",
          display: "flex",
          marginLeft: 8,
        }}
      >
        <img src={LogoDesktop} alt="yo" />
        <Button variant="text">
          <Typography variant="body1" sx={{ color: "grey" }}>
            ABOUT
          </Typography>
        </Button>
        <Button variant="text">
          <Typography variant="body1" sx={{ color: "grey" }}>
            {" "}
            CONTACT US
          </Typography>
        </Button>
      </Box>
      <Box
        sx={{
          alignContent: "center",
          display: "flex",
          justifyContent: "center",
          marginRight: 8,
        }}
      >
        <Stack spacing={4} direction="row">
          <CustomizedButton
            startIcon={<AddCircleOutlineIcon color="primary" />}
            variant="contained"
          >
            Add Product
          </CustomizedButton>

          <Link to="/NotificationPage">
            <CustomizedButton variant="contained">
               <NotificationsIcon color="primary" />
             </CustomizedButton>
           </Link>

          <CustomizedButton
            startIcon={<AccountCircleIcon color="primary" />}
            variant="contained"
          >
            Profile
          </CustomizedButton>
        </Stack>
      </Box>
    </Box>
  );
}
