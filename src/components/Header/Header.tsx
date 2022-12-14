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
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../backend/firebase";
import { useTranslation } from "react-i18next";
import { useCallback } from "react";

export default function Header() {
  const { t } = useTranslation();
  const { width } = useWindowDimensions();
  let breakpoint = false;
  if (width < 971) {
    breakpoint = true;
  }

  const [, updateState] = useState<any>();
  const forceUpdate = useCallback(() => updateState({}), []);

  useEffect(() => {
    onAuthStateChanged(auth, () => {
      forceUpdate();
    });
  }, [forceUpdate]);

  let onHover = false;

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

  if (breakpoint)
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: 64,
          alignItems: "center",
        }}
      >
        <Link to={"/catalog"}>
          <img src={LogoMobile} alt="yo" />
        </Link>
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
        width: "100%",
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
        {auth.currentUser ? (
          <Link to="/catalog">
            <img src={LogoDesktop} alt="DesktopLogoAlt" />
          </Link>
        ) : (
          <Link to="/">
            <img src={LogoDesktop} alt="DesktopLogoAlt" />
          </Link>
        )}

        <Link to="/about" style={{ textDecoration: "none" }}>
          <Button variant="text">
            <Typography variant="body1" sx={{ color: "grey" }}>
              {t("about")}
            </Typography>
          </Button>
        </Link>

        <Link to="/contact" style={{ textDecoration: "none" }}>
          <Button variant="text">
            <Typography variant="body1" sx={{ color: "grey" }}>
              {t("contact_us")}
            </Typography>
          </Button>
        </Link>
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
          {auth.currentUser ? (
            <>
              <Link to="/add" style={{ textDecoration: "none" }}>
                <CustomizedButton
                  startIcon={<AddCircleOutlineIcon color="primary" />}
                  variant="contained"
                >
                  <Typography variant="body1" sx={{ color: "grey" }}>
                    {t("add_product")}
                  </Typography>
                </CustomizedButton>
              </Link>
              <Link to="/notifications">
                <CustomizedButton
                  variant="contained"
                  onMouseEnter={() => {
                    onHover = true;
                  }}
                  onMouseLeave={() => {
                    onHover = false;
                  }}
                >
                  {onHover && <NotificationsIcon sx={{ color: "white" }} />}
                  {!onHover && <NotificationsIcon color="primary" />}
                </CustomizedButton>
              </Link>
              <Link to="/profile" style={{ textDecoration: "none" }}>
                <CustomizedButton
                  onMouseEnter={() => {
                    onHover = true;
                  }}
                  onMouseLeave={() => {
                    onHover = false;
                  }}
                  startIcon={
                    onHover ? (
                      <AccountCircleIcon sx={{ color: "white" }} />
                    ) : (
                      <AccountCircleIcon color="primary" />
                    )
                  }
                  variant="contained"
                >
                  <Typography variant="body1" sx={{ color: "grey" }}>
                    {auth.currentUser!.displayName}
                  </Typography>
                </CustomizedButton>
              </Link>
            </>
          ) : (
            <Link to="/login" style={{ textDecoration: "none" }}>
              <CustomizedButton
                onMouseEnter={() => {
                  onHover = true;
                }}
                onMouseLeave={() => {
                  onHover = false;
                }}
                startIcon={
                  onHover ? (
                    <AccountCircleIcon sx={{ color: "white" }} />
                  ) : (
                    <AccountCircleIcon color="primary" />
                  )
                }
                variant="contained"
              >
                <Typography variant="body1" sx={{ color: "grey" }}>
                  {t("login")}
                </Typography>
              </CustomizedButton>
            </Link>
          )}
        </Stack>
      </Box>
    </Box>
  );
}
