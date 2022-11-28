import { Card, CardContent, Typography } from "@mui/material";
import { BorderColorOutlined, LanguageOutlined } from "@mui/icons-material";

export const UserInfoCard = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" fontWeight={400}>
          PERSONAL DETAILS <BorderColorOutlined />
        </Typography>
        <Typography>Name: Simon Eriksson</Typography>
        <Typography>Position: Västra Götaland, Borås</Typography>
        <Typography>Phone: 0722358232</Typography>
        <Typography>Password: ********</Typography>
        <Typography>
          Language: English <LanguageOutlined />
        </Typography>
      </CardContent>
    </Card>
  );
};
