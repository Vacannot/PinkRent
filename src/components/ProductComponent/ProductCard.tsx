import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import CarImage from '../../assets/Rectangle42.png';
import PlaceIcon from '@mui/icons-material/Place';
function ProductCard() {
    return(
    <>
     <Box sx={{ display:"flex", '@media screen and (max-width: 600px)': { display:"none" } }} >
        <Card sx={{ width:"227px", height:"350px", m:"0.3rem" }}>
            <img style={{ width:"100%", height:"173px"}}  src={CarImage} alt="" />
            <CardContent>
                <Typography sx={{ mb: "1rem", fontFamily:"sans-serif" }} aria-label="Medium sizes" gutterBottom component="div">
                    La Ferrari Pasta racer 2022
                </Typography>
            </CardContent>
            <Typography variant="body2" color="text.secondary">
                    <PlaceIcon sx={{ color: "pink" }} /> västra göteborg
                </Typography>
            <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{ ml:".7rem" }} >230kr</Typography>
                <Button size="small" sx={{ backgroundColor: "pink", border: "1px solid white", color:"white", mr:".7rem" }}>Contact</Button>
            </CardActions>
        </Card>
       </Box>  
       <Box sx={{ width:"125px", mr:".5rem" ,'@media screen and (min-width: 600px)': { display:"none" } }} >
            <img  style={{ width:"125px"}} src={CarImage} alt="car" />
            <Typography sx={{ fontSize:"1rem" }} > La Ferrari Pasta </Typography>
            <Typography variant="body2"> 230kr</Typography>
       </Box>
            </>
    )
}

export  default ProductCard;