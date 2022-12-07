import { Box } from "@mui/material";
import Header from "../components/Header/Header";
import StartPageComponent from "../components/StartPageComponent/StartPageComponent";

function StartPage() {
  return (
    <>
      <Box
        sx={{
          overflow: "hidden !important",
          height: "100vh",
        }}
      >
        <Header />
        <StartPageComponent />
      </Box>
    </>
  );
}

export default StartPage;
