import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function ContactPageComponent() {
  const { t } = useTranslation();
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
        {t("contact_1")}
      </Typography>
    </Box>
  );
}

export default ContactPageComponent;
