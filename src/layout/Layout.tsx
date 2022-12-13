import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Wave from "../components/Wave/Wave";
import BottomWave from "../components/Wave/BottomWave/BottomWave";
import Footer from "../components/Footer/Footer";

function Layout() {
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <Wave />
        <Outlet />
      <Footer />
      <BottomWave />
    </div>
  );
}

export default Layout;
