import {
  Box,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import {useEffect, useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {useAuth} from "../../backend/Context";
import {auth} from "../../backend/firebase";
import {useTranslation} from "react-i18next";
import {ProductListing} from "./productListing";

export const UserProfileListings = () => {
  const {t} = useTranslation();

  const {getProductsByUserID, getCategories} = useAuth();

  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getProductsByUserID(user.uid).then((products) => {
          setProducts(products);
        });
      }
    });
  }, [getProductsByUserID, getCategories]);

  return (
    <Box
      sx={{
        minWidth: "335px",
        width: "80%",
        mt: "1rem",
      }}
    >
      <Typography sx={{pb: "2.5rem"}} variant="h6" fontWeight={400}>
        {t("your_products")}
      </Typography>
      <TableContainer>
        <Table aria-label="collapsible table">
          <TableHead sx={{borderBottom: "1px solid rgba(224, 224, 224, 1)"}}>
            <TableRow
              sx={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr .5fr"}}
            >
              <Typography sx={{padding: "16px"}} variant="subtitle1">
                {t("image")}
              </Typography>
              <Typography sx={{padding: "16px"}} variant="subtitle1">
                {t("title")}
              </Typography>
              <Typography sx={{padding: "16px"}} variant="subtitle1">
                {t("price")}
              </Typography>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((item, i) => {
              return <ProductListing product={item} key={i} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
