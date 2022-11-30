import {Link} from "react-router-dom";
import {AddProduct} from "../components/Forms/addProduct/addProduct";
import {LoginTest, SignupTest} from "../components/Forms/login/login";

function StartPage() {
  return (
    <>
      <Link to="loginPage">login</Link>
      <LoginTest />
      <SignupTest />
      <AddProduct />
    </>
  );
}

export default StartPage;
