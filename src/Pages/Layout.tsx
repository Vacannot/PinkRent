import {Link} from "react-router-dom";
import {AddUser} from "../components/Forms/addUser/addUser";

function StartPage() {
  return (
    <>
      <Link to="loginPage">login</Link>
      <AddUser />
    </>
  );
}

export default StartPage;
