import {Outlet} from "react-router-dom";
import Header from "../components/Header/Header";
import Wave from "../components/Wave/Wave";
import Footer from "../components/Footer/Footer";

function Layout() {
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <Wave />
      <>
        <Outlet />
      </>
      <Footer />
    </div>
  );
}

export default Layout;
