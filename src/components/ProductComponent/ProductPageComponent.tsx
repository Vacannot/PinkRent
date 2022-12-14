import { Box, Typography, ImageList } from "@mui/material";
import ProductCard from "./ProductCard";
import { FC } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  searchString: string;
}

const ProductPageComponent: FC<Props> = ({ searchString }: Props) => {
  const { t } = useTranslation();

  return (
    <>
      <Box
        sx={{
          ml: "2rem",
          "@media screen and (max-width: 850px)": {
            mt: "2rem",
          },
        }}
      >
        <Typography> {t("popular_on_pr")}</Typography>
      </Box>
      <ImageList
        sx={{
          width: "auto",
          ml: "2rem",
          mr: "2rem",
        }}
        rowHeight={164}
      >
        <Box sx={{ display: "flex" }}>
          <ProductCard searchString={searchString} />
        </Box>
      </ImageList>

      <Box sx={{ mt: "4rem", ml: "2rem" }}>
        <Typography> {t("frequently_visited")}</Typography>
        <Typography color="text.secondary">
          {t("currently_trending")}
        </Typography>
      </Box>
      <ImageList
        sx={{
          width: "auto",
          ml: "2rem",
          mr: "2rem",
          marginBottom:"15rem"
        }}
        rowHeight={164}
      >
        <Box sx={{ display: "flex" }}>
          <ProductCard searchString={searchString} />
        </Box>
      </ImageList>
    </>
  );
};

export default ProductPageComponent;
