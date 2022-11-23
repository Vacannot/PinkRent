import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, Box } from "@mui/material";
import styles from "./ProductDetails.module.scss";

export default function MultiActionAreaCard() {
  return (
    <div className={styles.main}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            image="/Image2.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography
              sx={{ fontSize: "1rem" }}
              gutterBottom
              variant="h6"
              component="div"
            >
              Tavla av kvinna 1843, väldigt fin och väldigt gammal. hyres endast
              till mig.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Västra Götaland, Borås
            </Typography>
            <Box sx={{ fontWeight: "bold", fontSize: 16, paddingTop: "10px" }}>
              230 kr
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
      <div>
        <div>
          <h4 className={styles.font}>DESCRIPTION</h4>
          <p className={styles.p}>
            Water. Earth. Fire. Air. Long ago, the four nations lived together
            in harmony. Then, everything changed when the Fire Nation attacked.
            Only the Avatar, master of all four elements, could stop them.
          </p>
        </div>
        <div className={styles.gap}>
          <Button
            size="medium"
            sx={{ color: "white", background: "#F06A6A" }}
            variant="contained"
          >
            REPORT
          </Button>
          <Button
            sx={{ color: "white", background: "primary", padding: "6px 40px" }}
            variant="contained"
          >
            REQUEST RENTAL
          </Button>
        </div>
      </div>
    </div>
  );
}
