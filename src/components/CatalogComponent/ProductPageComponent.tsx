import { Box, Typography, ImageList } from "@mui/material";
import ProductCard from "./ProductCard";
import EastIcon from "@mui/icons-material/East";

function ProductPageComponent() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          ml: "2rem",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography>Popular on PinkRent</Typography>
            <EastIcon />
          </Box>
          <Typography color="text.secondary">
            Currently trending items on PinkRent
          </Typography>
        </Box>
      </Box>
      <ImageList
        sx={{
          width: "auto",
          height: 360,
          ml: "2rem",
          "@media screen and (max-width: 600px)": { height: "200px" },
        }}
        rowHeight={164}
      >
        <Box sx={{ display: "flex" }}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Box>
      </ImageList>

      <Box sx={{ ml: "2rem" }}>
        <Typography> Frequently visited in residence</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography color="text.secondary">
            Hottest products in Residence!
          </Typography>
          <EastIcon />
        </Box>
      </Box>
      <ImageList
        sx={{
          width: "auto",
          height: 360,
          ml: "2rem",
          mr: "2rem",
          "@media screen and (max-width: 600px)": { height: "200px" },
        }}
        rowHeight={164}
      >
        <Box sx={{ display: "flex" }}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Box>
      </ImageList>
    </Box>
  );
}

export default ProductPageComponent;
