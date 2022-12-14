import { useMemo, useState } from "react";
import { useParams } from "react-router";
import { useAuth } from "../backend/Context";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import { Box, Typography } from "@mui/material";

function ProductDetailPage() {
  const { getProductByID } = useAuth();

  const [product, setProduct] = useState<any>();

  let params = useParams();
  const productID = params.productID;

  useMemo(() => {
    let product = getProductByID(productID!);
    product.then((data) => {
      setProduct(data);
    });
  }, [productID, getProductByID]);

  return (
    <>
      {product ? (
        <ProductDetails product={product} />
      ) : (
        <Box
          sx={{
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Typography variant="h4">Loading Details</Typography>
        </Box>
      )}
    </>
  );
}

export default ProductDetailPage;
