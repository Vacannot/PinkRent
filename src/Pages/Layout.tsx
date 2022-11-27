import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";

function Layout() {
  window.scrollTo(0, 0);
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
