import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAuth } from "../backend/Context";

function ProductUserPage() {
  const { getProductsByUserID } = useAuth();
  const [products, setProducts] = useState<any[]>([]);
  let params = useParams();
  const userID = params.userID;

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
          display: "flex",
          flexDirection: "column",
          width: "100%",
          mt: "6rem",
          transform: "translate(15%,-15%)",
          maxWidth: "65rem",
        }}
      >
        <Typography
          sx={{ mb: "5rem", fontSize: "1.5rem", textAlign: "center" }}
        >
          Products
        </Typography>
        {products.map((item) => {
          return (
            <Box
              sx={{
                width: "100%",
                justifyContent: "center",
                marginBottom: "2rem",
                maxWidth: "65rem",
              }}
            >
              <Box sx={{ width: "70%", display: "flex", alignItems: "end" }}>
                <img
                  style={{ width: "7rem", height: "7rem" }}
                  src={item.image}
                  alt=""
                />
                <Typography>{item.title}</Typography>
                <Typography>{item.price} kr</Typography>
              </Box>
              <Box
                sx={{
                  backgroundColor: "gray",
                  width: "70%",
                  height: ".1rem",
                  justifyContent: "center",
                }}
              ></Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
}

export default ProductUserPage;
