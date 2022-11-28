import { Link } from "react-router-dom";
import { LoginTest, SignupTest } from "../components/Forms/login/login";

function StartPage() {
  return (
    <>
      <Link to="loginPage">login</Link>
      <LoginTest />
      <SignupTest />
    </>
  );
}

export default StartPage;
