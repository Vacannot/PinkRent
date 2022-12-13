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
        {products.map((item) => {
          return (
              <Card raised sx={{marginBottom:"2rem", width: "fit-content", display: "flex", flexDirection: "column" , "@media screen and (max-width: 900px)": { display: "flex", flexDirection:"column", alignItems:"center", width:"auto" }}}>
                <CardMedia
                  sx={{ width: "15rem", height: "15rem" }}
                  image={item.image}
                  onClick={() => {
                    navigate(`/details/${item.id}`);
                  }}
                />
                <Typography>{item.title}</Typography>
                <Typography>{item.price} kr</Typography>
              </Card>

          );
        })}
      </Box>
    </>
  );
}

export default ProductUserPage;
