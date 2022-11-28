import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Wave from "../components/Wave/Wave";

function Layout() {
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <Wave />
      <>
        <Outlet />
      </>
    </div>
  );
}

export default Layout;
