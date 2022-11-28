import { Link } from "react-router-dom";
import { UserProfilePage } from "../components/userProfile/UserProfilePage";

function StartPage() {
  return (
    <div>
    <Link to="loginPage">
      <button>HejHej</button>
    </Link>
    <UserProfilePage />
    </div>
  );
}

export default StartPage;
