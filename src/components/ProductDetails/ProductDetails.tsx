import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {Button, Box, IconButton} from "@mui/material";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import {useAuth} from "../../backend/Context";
import {LocationOnOutlined, LocalPhoneOutlined} from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import Person2Icon from '@mui/icons-material/Person2';
import { useEffect, useState } from "react";


  const ProductDetails = ({product}: {product: any}, {user}: {user:any}) => {
  const {createNotification, getProductsByUserID} = useAuth();
  const {width} = useWindowDimensions();
  let params = useParams();
  const userID = params.userId;
  
 
  

  let breakpoint = false;
  if (width < 971) {
    breakpoint = true;
  }

  if (breakpoint)
    return (
     <Box sx={{ display:"flex", justifyContent:"center"}} >
      <Card sx={{maxWidth: 345,}}>
      <Box
        key={product.id}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
          <CardMedia
            component="img"
            height="240"
            image={product.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              sx={{fontSize: "1rem"}}
              gutterBottom
              variant="h6"
              component="div"
            >
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.location}
            </Typography>
            <Box
              sx={{
                fontWeight: "bold",
                fontSize: 16,
                paddingTop: "10px",
              }}
            >
              {product.price} kr
            </Box>
          </CardContent>
        <Box>
          <Box>
            <Typography
              variant="subtitle1"
              sx={{marginBottom: 3, marginTop: 3, marginLeft: 2}}
              >
              DESCRIPTION
            </Typography>
            <Typography
              variant="body2"
              sx={{maxWidth: "21rem", marginBottom: 3, marginLeft: 2}}
              >
              {product.description}
            </Typography>
          </Box>
          <Link to="productUserPage/:userID"  >
          <IconButton>
            <Person2Icon />
            <Typography>{user}</Typography> 
          </IconButton>
          </Link>
          <Box sx={{gap: "10px", display: "flex"}}>
            <Button
              size="medium"
              sx={{color: "white", background: "#F06A6A"}}
              variant="contained"
              >
              REPORT
            </Button>
            <Button
              sx={{
                color: "white",
                padding: "6px 40px",
              }}
              variant="contained"
              onClick={() => {
                createNotification(product.id).then(() => {
                  console.log("Create Notification done");
                });
              }}
              >
              REQUEST RENTAL
            </Button>
          </Box>
        </Box>
      </Box>
    </Card>
    </Box> 
    );
  // desktop
  return (
    <Box
      key={product.id}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "8rem",
      }}
    >
      <Card sx={{display: "flex"}}>
        <CardMedia
          component="img"
          image={product.image}
          alt="green iguana"
          sx={{width: "20rem"}}
        />
        <CardContent>
          <Typography
            sx={{fontSize: "1.8rem", fontWeight: "400"}}
            gutterBottom
            variant="h6"
            component="div"
          >
            {product.title}
          </Typography>
          <Box>
            <Typography
              variant="body2"
              sx={{
                maxWidth: "30rem",
                marginBottom: "-66px",
                fontSize: "1.1rem",
              }}
            >
              {product.description}
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                display: "flex",
                gap: "5px",
                alignItems: "center",
                marginTop: "7rem",
              }}
              variant="body2"
              color="text.secondary"
            >
              <LocationOnOutlined />
              {product.location}
            </Typography>
            <Typography>
              <LocalPhoneOutlined />
              {product.phoneNumber}
            </Typography>
            <Link to="/productUserPage"  >
          <IconButton>
            <Person2Icon />
            <Typography>{}</Typography>
          </IconButton>
          </Link>
            <Box
              sx={{
                fontWeight: "bold",
                fontSize: 25,
                paddingTop: "10px",
              }}
            >
              <Typography>Price: {product.price} kr/day</Typography>
            </Box>
          </Box>
          <Box sx={{gap: "60px", display: "flex", marginTop: "2rem"}}>
            <Button
              sx={{
                color: "white",
                padding: "6px 40px",
              }}
              variant="contained"
            >
              REQUEST RENTAL
            </Button>
            <Button
              size="medium"
              sx={{color: "white", background: "#F06A6A"}}
              variant="contained"
              onClick={() => {
                createNotification(product.id).then(() => {
                  console.log("Create Notification done");
                });
              }}
            >
              REPORT
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
           
};
export default ProductDetails;
