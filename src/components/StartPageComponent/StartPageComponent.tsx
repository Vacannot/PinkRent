import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import StartWave from "../Wave/StartWave/StartWave";
import styles from "./StartPageComponent.module.scss";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function StartPageComponent() {
  const { width } = useWindowDimensions();
  const { t } = useTranslation();

  let breakpoint = false;
  if (width < 971) {
    breakpoint = true;
  }
  if (breakpoint) {
    return (
      <>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: "12vh",
            marginLeft: "9vw",
            gap: 5,
            width: "800px",
          }}
        >
          <Box>
            <Typography variant="h4">{t("sharing_made")}</Typography>
            <Typography variant="h4" color="primary" fontWeight={600}>
              {t("easier")}.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Link to="/catalog" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{
                  color: "white",
                  maxWidth: "200px",
                  borderRadius: "15px",
                  minWidth: "150px",
                }}
              >
                {t("get_started")}
              </Button>
            </Link>
            <Link
              to="/register"
              style={{ textDecoration: "none", maxWidth: "200px" }}
            >
              <Button
                variant="outlined"
                color="info"
                sx={{
                  color: "#606060",
                  maxWidth: "200px",
                  border: "2px solid #F5BBDC",
                  borderRadius: "15px",
                  minWidth: "150px",
                }}
              >
                {t("register_caps")}
              </Button>
            </Link>
          </Box>
        </Box>
        <Box
          className={styles.waveMobile}
          sx={{
            boxSizing: "border-box",
            bottom: 0,
            right: 0,
            borderBottom: "3px solid",
            borderColor: "white",
            marginTop: "30vh",
          }}
        >
          <StartWave />
        </Box>
      </>
    );
  }
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: "12vh",
          marginLeft: "5vw",
          gap: 4,
        }}
      >
        <Box>
          <Typography variant="h2">{t("sharing_made")}</Typography>
          <Typography variant="h2" color="primary" fontWeight={600}>
            {t("easier")}.
          </Typography>
        </Box>
        <Typography variant="body1" paragraph={true} sx={{ maxWidth: "624px" }}>
          {t("startpage_1")}
        </Typography>
        <Link to="/catalog" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            sx={{ color: "white", maxWidth: "200px" }}
          >
            {t("get_started")}
          </Button>
        </Link>
      </Box>
      <Box
        className={styles.wave}
        sx={{
          boxSizing: "border-box",
          bottom: 0,
          right: 0,
          borderBottom: "3px solid",
          borderColor: "white",
          marginTop: "6vh",
        }}
      >
        <StartWave />
      </Box>
    </>
  );
}

export default StartPageComponent;
