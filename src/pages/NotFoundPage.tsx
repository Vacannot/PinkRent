import Buggy from "@mui/icons-material/PestControlOutlined";
import {Box, Typography} from "@mui/material";
import React from "react";

export default function NotFoundPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "6rem",
      }}
    >
      <Box sx={{display: "flex", gap: "1rem"}}>
        <Buggy
          sx={{
            fontSize: "7rem",
            fontWeight: "100",
            color: "#ED80BE",
          }}
        />
        <Typography sx={{fontSize: "5rem", color: "#F5B9DC"}}>404</Typography>
      </Box>
      <Typography sx={{fontWeight: "bold", fontSize: "2rem"}}>
        Page not found
      </Typography>
      <p>We're sorry, the page you requested could not be found. </p>
    </Box>
  );
}
