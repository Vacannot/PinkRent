import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useState, useMemo, FC } from "react";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../backend/Context";
import { useTranslation } from "react-i18next";
interface Props {
  searchString: string;
}

export const ProductCard: FC<Props> = ({ searchString }: Props) => {
  const { t } = useTranslation();
  const { getProducts, createNotification, filter } = useAuth();
  const navigate = useNavigate();
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);

  useMemo(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, [getProducts]);

  useMemo(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(searchString.toLowerCase())
      )
    );
  }, [products, searchString]);

  const handleDetailedClick = (item: any) => {
    if (item.rented) {
      return;
    }
    navigate(`/details/${item.id}`);
  };

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
              onClick={() => handleDetailedClick(item)}
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
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mr: "5px",
                    ml: ".7rem",
                  }}
                >
                  <Typography>
                    {item.price === 0 ? (
                      <Typography> Free </Typography>
                    ) : (
                      item.price
                    )}
                    {item.price === 0 ? <></> : <>kr/{t("day")}</>}
                  </Typography>
                  {item.rented ? (
                    <Typography color="primary">Rented</Typography>
                  ) : (
                    <Button
                      size="small"
                      variant="contained"
                      color="secondary"
                      sx={{
                        height: "1.5rem",
                        color: "white",
                        boxShadow: 3,
                      }}
                      onClick={(e) => {
                        e.stopPropagation();

                        createNotification(item).then(() => {
                          console.log("Create Notification done");
                        });
                      }}
                    >
                      {t("request")}
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Box>
          );
        })}
    </>
  );
};

export default ProductCard;
