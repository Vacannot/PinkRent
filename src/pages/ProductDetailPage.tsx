import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {useAuth} from "../backend/Context";
import ProductDetails from "../components/ProductDetails/ProductDetails";

function ProductDetailPage() {
  const {getProductByID } = useAuth();
  const [product, setProduct] = useState<any>();
  let params = useParams();
  const productID = params.productID;
  
  const { getProductsByUserID } = useAuth();
  const [user, setUser] = useState<any[]>();
  const userID = params.userId;

  useEffect(() => {
    let product = getProductByID(productID!);
    product.then((data) => {
      console.log(data);
      setProduct(data);
    });
  }, [productID, getProductByID]);

  useEffect(() => {
    let user = getProductsByUserID(userID!);
    user.then((data) => {
      setUser(data);
      console.log( data)
    });
    
  }, [userID, getProductsByUserID]);
 

  return <>{product ? <ProductDetails product={product}  /> : <p>321</p>}</>;
}

export default ProductDetailPage;
