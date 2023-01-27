import Box from "@mui/material/Box";
import {Button, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import {collection, deleteDoc, getDocs, query} from "firebase/firestore";
import {db} from "../../backend/firebase";

function ContactPageComponent() {
  const {t} = useTranslation();
  return (
    <Box
      sx={{
        marginTop: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        "@media screen and (max-width: 460px)": {
          padding: "3rem",
          textAlign: "center",
        },
      }}
    >
      <Typography style={{maxWidth: "600px"}} sx={{marginTop: 3}}>
        {t("contact_1")}
      </Typography>
      <Button
        onClick={async () => {
          const doIt = async (table: string) => {
            const col = collection(db, table);
            const q = query(col);
            const docs = await getDocs(q);
            docs.forEach((item) => {
              deleteDoc(item.ref);
            });
          };

          await doIt("products");
          await doIt("notifications");
          await doIt("userdata");

          // deleteDoc()
        }}
      >
        DONT CLICK PLS
      </Button>
    </Box>
  );
}

export default ContactPageComponent;
