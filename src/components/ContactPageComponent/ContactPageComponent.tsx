import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

function ContactPageComponent() {
  return (
    <Box
      sx={{
        marginTop: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        "@media screen and (max-width: 460px)": {
          padding: "3rem",
          textAlign: "center",
        },
      }}
    >
      <Typography style={{ maxWidth: "600px" }} sx={{ marginTop: 3 }}>
        Feel free to Contact us at: PinkRent@DontMail.com
      </Typography>
    </Box>
  );
}

export default ContactPageComponent;
