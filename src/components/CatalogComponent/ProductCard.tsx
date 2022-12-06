import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import CarImage from "../../assets/Rectangle42.png";
import Person2Icon from '@mui/icons-material/Person2';
import { Link } from "react-router-dom";
function ProductCard() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          "@media screen and (max-width: 600px)": { display: "none" },
        }}
      >
        <Card sx={{ width: "227px", height: "330px", m: "0.3rem" }}>
          <img
            style={{ width: "100%", height: "173px" }}
            src={CarImage}
            alt=""
          />
          <CardContent>
            <Typography
              sx={{ fontFamily: "sans-serif" }}
              aria-label="Medium sizes"
              gutterBottom
              component="div"
              variant="body2"
            >
              La Ferrari Pasta racer 2022
            </Typography>
          </CardContent>

          <Box sx={{display:"flex", alignItems:"center"}} >
          <Link to={"/userProductPage"}>
          <IconButton>
            <Person2Icon sx={{ color: "primary.main" }} /> 
          </IconButton>
          </Link>
            <Typography>Simon</Typography>
          </Box>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "space-between",
              ml: "0.7rem",
              mr: "0.7rem",
            }}
          >
            <Typography>230kr</Typography>
            <Button
              size="small"
              sx={{
                height: "1.5rem",
                backgroundColor: "primary.main",
                color: "white",
                boxShadow: 3,
              }}
            >
              Contact
            </Button>
          </CardActions>
        </Card>
      </Box>

      <Box
        sx={{
          height: "200px",
          width: "125px",
          mr: ".5rem",
          "@media screen and (min-width: 600px)": { display: "none" },
        }}
      >
        <img style={{ width: "125px" }} src={CarImage} alt="car" />
        <Typography sx={{ fontSize: "1rem" }}> La Ferrari Pasta </Typography>
        <Typography variant="body2"> 230kr</Typography>
      </Box>
    </>
  );
}

export default ProductCard;
