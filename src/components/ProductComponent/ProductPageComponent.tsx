import {Box, IconButton, Typography, ImageList} from "@mui/material";
import ProductCard from "./ProductCard";
import CheckIcon from "@mui/icons-material/Check";

function ProductPageComponent() {
  return (
    <>
      <Box sx={{ml: "2rem"}}>
        <Typography> Popular on PinkRent</Typography>
        <IconButton aria-label="delete">
          <Typography>Rent now</Typography>
          <CheckIcon />
        </IconButton>
      </Box>
      <ImageList
        sx={{
          width: "auto",
          height: 340,
          ml: "2rem",
          mr: "2rem",
          "@media screen and (max-width: 600px)": {height: "200px"},
        }}
        rowHeight={164}
      >
        <Box sx={{display: "flex"}}>
          <ProductCard />
        </Box>
      </ImageList>

      <Box sx={{mt: "4rem", ml: "2rem"}}>
        <Typography> Frequently visited in residence</Typography>
        <Typography color="text.secondary">
          Currently trending items on PinkRent
        </Typography>
      </Box>
      <ImageList
        sx={{
          width: "auto",
          height: 340,
          ml: "2rem",
          mr: "2rem",
          "@media screen and (max-width: 600px)": {height: "200px"},
        }}
        rowHeight={164}
      >
        <Box sx={{display: "flex"}}>
          <ProductCard />
        </Box>
      </ImageList>
    </>
  );
}

export default ProductPageComponent;
