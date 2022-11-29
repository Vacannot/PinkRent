import { Button, Typography } from "@mui/material";
import { Box, maxWidth } from "@mui/system";
import StartWave from "../Wave/StartWave/StartWave";
import styles from "./StartPageComponent.module.scss";
import useWindowDimensions from "../../hooks/useWindowDimensions";

function StartPageComponent() {
  const { width } = useWindowDimensions();
  let breakpoint = false;
  if (width < 971) {
    breakpoint = true;
  }
  if (breakpoint) {
    return null;
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
          <Typography variant="h2">SHARING MADE</Typography>
          <Typography variant="h2" color="primary" fontWeight={600}>
            EASIER.
          </Typography>
        </Box>
        <Typography variant="body1" paragraph={true} sx={{ maxWidth: "624px" }}>
          We connect people to create economic opportunites for all. PinkRent
          creates inspiring experiences for our buyers and sellers, providing
          opportunity to grow and thrive - no matter who they are.
        </Typography>
        <Button variant="contained" sx={{ color: "white", maxWidth: "200px" }}>
          GET STARTED
        </Button>
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
