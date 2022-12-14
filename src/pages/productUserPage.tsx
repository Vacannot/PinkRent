import { Box, Card, CardMedia, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useAuth } from "../backend/Context";

function ProductUserPage() {
  const { getProductsByUserID } = useAuth();
  const [products, setProducts] = useState<any[]>([]);
  let params = useParams();
  const userID = params.userID;

  const navigate = useNavigate()

  useEffect(() => {
    let product = getProductsByUserID(userID!);
    product.then((data) => {
      console.log(data);
      setProducts(data);
    });
  }, [userID, getProductsByUserID]);
  return (
    <>
      <Box
        sx={{
          display: "grid",
          placeContent:"center",
        }}
      >
        <Typography
          sx={{mb: "5rem", fontSize: "1.5rem", textAlign: "center"}}
          >
           Products
        </Typography>
        <Box  sx={{display:"flex", justifyContent:"space-between"}} >
          
        <Typography sx={{marginLeft:"7.5rem" }} >Image</Typography>
        <Typography>Title</Typography>
        <Typography  sx={{ marginRight:"1rem"  }} >Price</Typography>
        </Box>
       
        {products.map((item) => {
          return (
            
            
            <Card raised sx={{marginBottom:"2rem", width:"40rem",alignItems:"center", justifyContent:"space-between" ,display: "flex", "@media screen and (max-width: 970px)": { display: "flex", flexDirection:"column", alignItems:"start", width: "fit-content",}}}>
                <CardMedia
                  sx={{ width: "15rem", height: "15rem" }}
                  image={item.image}
                  onClick={() => {
                    navigate(`/details/${item.id}`);
                  }}
                  />
                <Typography sx={{fontSize:"1rem" ,"@media screen and (max-width: 970px)": { marginLeft:"1rem"} }} >{item.title}</Typography>
                <Typography sx={{ fontSize:"1rem" ,marginRight:"1rem","@media screen and (max-width: 970px)": { marginLeft:"1rem"} }} >{item.price} kr</Typography>
              </Card>
         

          );
        })}
      </Box>
    </>
  );
}

export default ProductUserPage;
