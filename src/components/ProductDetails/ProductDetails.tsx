import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, Box } from "@mui/material";
import mockData from "../../mockData";

const ProductDetails = () => {
  return (
    <>
      {mockData.map((data) => (
        <Box
          key={data.id}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "8rem",
          }}
        >
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
          <Box>
            <Box>
              <Typography
                variant="subtitle1"
                sx={{ marginBottom: 3, marginTop: 3 }}
              >
                DESCRIPTION
              </Typography>
              <Typography
                variant="body2"
                sx={{ maxWidth: "21rem", marginBottom: 3 }}
              >
                {data.desc}
              </Typography>
            </Box>

            <Box sx={{ gap: "10px", display: "flex" }}>
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
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
};
export default ProductDetails;
