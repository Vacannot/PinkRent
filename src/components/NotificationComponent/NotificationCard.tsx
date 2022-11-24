import styles from "./NotificationCard.module.scss"
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CarImage from '../../assets/Rectangle42.png'
import { IconButton, Box } from "@mui/material";


      
function NotificationCard() {
    return (
      <><>
        <Box sx={{ width:"100%", '@media screen and (min-width: 800px)': { display: 'none',} }}>
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
             <hr className={styles.line}></hr>
        </Box>
      </>
      <Card sx={{ width: "80%", display: "flex", mx: "auto",
        '@media screen and (max-width: 800px)': { display: 'none',}, }}>
          <CardContent sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-around" }}>
            <img src={CarImage} alt="" />
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Max Andersson
            </Typography>
            <CardActions>
            <IconButton aria-label="delete"  color="success"  >
              <CheckIcon />
            </IconButton>
            <IconButton aria-label="delete"  color="error"   >
              <CloseIcon/>
            </IconButton>
            </CardActions>
          </CardContent>
        </Card>
        </>
      
            
     )
    }

     
 

export default NotificationCard;