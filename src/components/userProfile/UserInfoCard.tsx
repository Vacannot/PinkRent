import { Card, CardContent, IconButton, Typography } from "@mui/material";
import { BorderColorOutlined, LanguageOutlined } from "@mui/icons-material";
import styles from "./userProfile.module.scss";

export const UserInfoCard = () => {
  return (
    <Card sx={{ width: 335, height: 250 }}>
      <CardContent sx={{ paddingBottom: "5px" }}>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          className={styles.spacing}
          variant="h6"
          fontWeight={400}
        >
          PERSONAL DETAILS
          <IconButton>
            <BorderColorOutlined />
          </IconButton>
        </Typography>
        <Typography className={styles.spacing}>Simon Eriksson</Typography>
        <Typography className={styles.spacing}>
          Västra Götaland, Borås
        </Typography>
        <Typography sx={{mb:'9px'}}>0722358232</Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          Language: English
          <IconButton>
            <LanguageOutlined />
          </IconButton>
        </Typography>
      </CardContent>
    </Card>
  );
};
