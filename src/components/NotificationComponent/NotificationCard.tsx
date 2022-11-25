
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CarImage from '../../assets/Rectangle42.png';
import { IconButton, Box } from "@mui/material";


      
function NotificationCard() {
    return (
      <><>
       <Card sx={{ width:"100%" ,'@media screen and (min-width: 800px)': { display: 'none',} }}>
          <Box sx={{ display: "flex", justifyContent:"space-around", alignItems:"end"}}>
            <Box>
              <Typography variant="h6" > Max Andersson</Typography>
              <Typography>Request to rent Ferrari</Typography>
             </Box>
            <Box >
            <IconButton aria-label="delete"  color="success"  >
              <CheckIcon />
            </IconButton>
            <IconButton aria-label="delete"  color="error"   >
              <CloseIcon/>
            </IconButton>
            </Box>
          </Box>
             <hr style={{ height:".1rem", width:"80%", backgroundColor:"black", opacity:".2"  }}></hr>
        </Card>
      </>

      <Card sx={{width:"80%", mb:".1rem" ,mt:"1rem", display:"flex", mx:"auto",
        '@media screen and (max-width: 800px)': { display: 'none',}}} >
        <Typography  variant="h5" sx={{ ml:"3.3rem" }} > NOTIFICATIONS </Typography>
      </Card>

       <Card sx={{ width: "80%", mx: "auto",'@media screen and (max-width: 800px)': { display: 'none',} }} >
         <Box sx={{display:"flex", justifyContent:"space-around", mt:".5rem"}} >
            <Typography  > Image</Typography>
             <Typography> Title</Typography>
            <Typography> Reguest from</Typography>
         <Box sx={{display:"flex"}} >
            <Typography> Approve</Typography>
            <Typography sx={{ ml:"1rem" }} > Decliene</Typography>
          </Box>

         </Box>
          <hr style={{ height:".1rem", width:"90%", backgroundColor:"black", opacity:".2"  }}></hr>

         <Box sx={{ display: "flex", mx: "auto",
           '@media screen and (max-width: 800px)': { display: 'none',}, }}>
           <CardContent sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-around" }}>
            <img src={CarImage} alt="CarImage" />
            <Typography gutterBottom variant="h5" component="div">
              Car            </Typography>
            <Typography variant="body2" color="text.secondary">
              Max Andersson
            </Typography>
            <CardActions>
            <IconButton aria-label="delete"  color="success" sx={{mr:"2.5rem"}}  >
              <CheckIcon />
            </IconButton>
            <IconButton aria-label="delete"  color="error"   >
              <CloseIcon/>
            </IconButton>
            </CardActions>
          </CardContent>
          </Box>

          <hr style={{ height:".1rem", width:"90%", backgroundColor:"black", opacity:".2"}}></hr>
          
    
        </Card>
        </>
      
            
     )
    }

     
 

export default NotificationCard;