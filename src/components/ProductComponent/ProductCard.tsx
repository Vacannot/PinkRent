import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useState, useEffect, FC } from "react";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../backend/Context";

interface Props {
  searchString: string;
}

export const ProductCard: FC<Props> = ({ searchString }: Props) => {
  const { getProducts, createNotification, filter } = useAuth();
  const navigate = useNavigate();
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, [getProducts]);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(searchString.toLowerCase())
      )
    );
  }, [products, searchString]);

  return (
    <>
      {filteredProducts
        .filter((item) => {
          if (filter === null) return true;

          return item.category === filter;
        })
        .map((item) => {
          return (
            <Box
              sx={{
                display: "flex",
              }}
              key={item.id}
              onClick={() => {
                navigate(`/details/${item.id}`);
              }}
            >
              <Card
                sx={{
                  width: "227px",
                  height: "330px",
                  m: "0.3rem",
                  "@media screen and (max-width: 600px)": {
                    width: "150px",
                    height: "auto",
                  },
                  "@media screen and (max-width: 400px)": {
                    width: "120px",
                    height: "300px",
                  },
                }}
              >
                <img
                  style={{ width: "100%", height: "173px" }}
                  src={item.image}
                  alt={item.title}
                />
                <CardContent>
                  <Typography
                    sx={{ fontFamily: "sans-serif" }}
                    aria-label="Medium sizes"
                    gutterBottom
                    component="div"
                  >
                    {item.title}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography sx={{ ml: ".7rem" }}>{item.price} kr</Typography>
                  <Button
                    size="small"
                    sx={{
                      height: "1.5rem",
                      backgroundColor: "pink",
                      border: "1px solid white",
                      color: "white",
                      mr: ".7rem",
                      boxShadow: 3,
                    }}
                    onClick={(e) => {
                      e.stopPropagation();

                      createNotification(item.id).then(() => {
                        console.log("Create Notification done");
                      });
                    }}
                  >
                    Request
                  </Button>
                </CardActions>
              </Card>
            </Box>
          );
        })}
    </>
  );
};

export default ProductCard;
