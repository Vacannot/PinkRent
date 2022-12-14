import { useMemo, useState } from "react";
import { useParams } from "react-router";
import { useAuth } from "../backend/Context";
import ProductDetails from "../components/ProductDetails/ProductDetails";

function ProductDetailPage() {
  const { getProductByID } = useAuth();

  const [product, setProduct] = useState<any>();

  let params = useParams();
  const productID = params.productID;

  useMemo(() => {
    let product = getProductByID(productID!);
    product.then((data) => {
      console.log(data);
      setProduct(data);
    });
  }, [productID, getProductByID]);

  return (
    <>
      {product ? <ProductDetails product={product} /> : <p>No Details found</p>}
    </>
  );
}

export default ProductDetailPage;
