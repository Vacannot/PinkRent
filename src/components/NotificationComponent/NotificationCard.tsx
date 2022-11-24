import styles from "./NotificationCard.module.scss"
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import * as React from 'react';
      import Card from '@mui/material/Card';
      import CardActions from '@mui/material/CardActions';
      import CardContent from '@mui/material/CardContent';
      import Button from '@mui/material/Button';
      import Typography from '@mui/material/Typography';
import { IconButton } from "@mui/material";
import { color } from "@mui/system";
      
function NotificationCard() {
    return (
      <><>
        <div className={styles.container1}>
          <div className={styles.container}>

            <div>
              <p className={styles.name}>Max Andersson</p>
              <p className={styles.margin} >Request to rent Ferrari</p>
            </div>
            <div>
            <IconButton aria-label="delete"  color="success"  >
              <CheckIcon />
            </IconButton>
            <IconButton aria-label="delete"  color="error"   >
              <CloseIcon/>
            </IconButton>
            </div>
          </div>
             <hr className={styles.line}></hr>
        </div>
      </>
      <Card className="cardComponent" sx={{ width: "80%", display: "flex", mx: "auto",
        '@media screen and (max-width: 650px)': { display: 'none',}, }}>
          
          <CardContent sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-around" }}>
            <img src="Rectangle42.png" alt="" />
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