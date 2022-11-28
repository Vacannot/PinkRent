import { Card, CardContent, Typography } from "@mui/material";
import { BorderColorOutlined, LanguageOutlined } from "@mui/icons-material";
import styles from "./userProfile.module.scss";

export const UserInfoCard = () => {
  return (
    <Card sx={{ width: 335, height: 250 }}>
      <CardContent>
        <Typography className={styles.spacing} variant="h6" fontWeight={400}>
          PERSONAL DETAILS <BorderColorOutlined />
        </Typography>
        <Typography className={styles.spacing}>Simon Eriksson</Typography>
        <Typography className={styles.spacing}>
          Västra Götaland, Borås
        </Typography>
        <Typography className={styles.spacing}>0722358232</Typography>
        <Typography>
          Language: English <LanguageOutlined />
        </Typography>
      </CardContent>
    </Card>
  );
};
