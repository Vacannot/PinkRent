import styles from "./NotificationCard.module.scss"
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
function NotificationCard() {
    return (
      <div className={styles.container1} >
        <div className={styles.container}>

        <div>
        <p className={styles.name} >Max Andersson</p>
        <p>Request to rent Ferrari</p>
        </div>
        <div className={styles.icons} >
            <div className={styles.colorGreen} >
            < CheckIcon />
            </div>
             <div className={styles.colorRed} >
            < CloseIcon />
             </div>

        </div>
        </div>
           <hr className={styles.line} ></hr>
      </div>
     )
    }

     
 

export default NotificationCard;