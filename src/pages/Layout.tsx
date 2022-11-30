import {Box, Button} from "@mui/material";
import {onAuthStateChanged} from "firebase/auth";
import {useEffect} from "react";
import {useState} from "react";
import {Link} from "react-router-dom";
import {useAuth} from "../backend/Context";
import {auth} from "../backend/firebase";
import {AddProduct} from "../components/Forms/addProduct/addProduct";
import {LoginTest, SignupTest} from "../components/Forms/login/login";

function StartPage() {
  const {getProductsByUserID, createNotification} = useAuth();

  const [test, setTest] = useState<any[]>([]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getProductsByUserID(user.uid).then((products) => {
          console.log(products);
          setTest(products);
        });
      }
    });
  }, [getProductsByUserID]);

  return (
    <>
      <Link to="loginPage">login</Link>
      <LoginTest />
      <SignupTest />
      <AddProduct />
      {test.map((p) => {
        return (
          <Box key={p.id}>
            <img src={p.image} alt="Wooh" width={100} />{" "}
            <Button
              onClick={() => {
                createNotification(p.id).then(() => {
                  console.log("Create Notification done");
                });
              }}
            >
              Test notification
            </Button>
          </Box>
        );
      })}
    </>
  );
}

export default StartPage;
