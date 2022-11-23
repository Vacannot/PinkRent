import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, Box } from "@mui/material";
import styles from "./ProductDetails.module.scss";
import mockData from "../../mockData";

const ProductDetails = () => {
  return (
    <div>
      {mockData.map((data) => (
        <div className={styles.main}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image={data.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  sx={{ fontSize: "1rem" }}
                  gutterBottom
                  variant="h6"
                  component="div"
                >
                  {data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.location}
                </Typography>
                <Box
                  sx={{ fontWeight: "bold", fontSize: 16, paddingTop: "10px" }}
                >
                  {data.price}
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
          <div>
            <div>
              <h4>DESCRIPTION</h4>
              <p className={styles.p}>{data.desc}</p>
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
                sx={{
                  color: "white",
                  background: "primary",
                  padding: "6px 40px",
                }}
                variant="contained"
              >
                REQUEST RENTAL
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ProductDetails;
