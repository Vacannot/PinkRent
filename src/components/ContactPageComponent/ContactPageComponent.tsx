import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function ContactPageComponent() {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        marginTop: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography style={{ maxWidth: "600px" }} sx={{ marginTop: 3 }}>
        {t("contact_1")}
      </Typography>
    </Box>
  );
}

export default ContactPageComponent;
