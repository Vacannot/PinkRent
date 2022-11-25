import { Box, IconButton, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import CheckIcon from '@mui/icons-material/Check';


function ProductPageComponent() {
    return (

        <>
        <Box  >
            <Typography> Popular on PinkRent</Typography>
            <IconButton aria-label="delete"  >
                <Typography  >Rent now</Typography>
              <CheckIcon />
            </IconButton>
        </Box>
        <Box sx={{ display:"flex" }} >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        </Box>
        <Box sx={{ mt:"4rem" }} >
            <Typography> Frequently visited in residence</Typography>
            <IconButton aria-label="delete"  >
                <Typography  >Rent now</Typography>
              <CheckIcon />
            </IconButton>
        </Box>
        <Box sx={{ display:"flex" }} >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        </Box>

        </>
    )
}


export default ProductPageComponent;