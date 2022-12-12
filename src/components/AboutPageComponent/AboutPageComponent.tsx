import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function AboutPageComponent() {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        marginTop: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "@media screen and (max-width: 700px)": {
          padding: "3rem",
        },
      }}
    >
      <Typography style={{ maxWidth: "600px" }} sx={{ marginTop: 3 }}>
        {t("about_1")}
        <br />
        <br />
        {t("about_2")}
        <br />
        <br />
        {t("about_3")}
        <br />
        <br />
        {t("about_4")}
      </Typography>
    </Box>
  );
}

export default AboutPageComponent;
