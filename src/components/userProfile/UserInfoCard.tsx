import {Card, CardContent, IconButton, Typography} from "@mui/material";
import {BorderColorOutlined, LanguageOutlined} from "@mui/icons-material";
import styles from "./userProfile.module.scss";
import {getAuth} from "firebase/auth";

export const UserInfoCard = () => {
  const user = getAuth().currentUser;
  return (
    <Card sx={{width: 335, height: 250}}>
      <CardContent sx={{paddingBottom: "5px"}}>
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
        <Typography className={styles.spacing}>{user?.displayName}</Typography>
        <Typography className={styles.spacing}>{user?.email}</Typography>
        <Typography sx={{mb: "9px"}}>{user?.phoneNumber}</Typography>
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
