import {Routes, BrowserRouter, Route} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Layout from "./layout/Layout";
import NotificationPage from "./pages/NotificationPage";
import ProfilePage from "./pages/ProfilePage";
import AddProductPage from "./pages/AddProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CatalogPage from "./pages/CatalogPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import StartPage from "./pages/StartPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<StartPage />} />
          <Route path="/" element={<Layout />}>
            <Route path="notifications" element={<NotificationPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="productPage" element={<ProductPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="add" element={<AddProductPage />} />
            <Route path="details" element={<ProductDetailPage />} />
            <Route path="catalog" element={<CatalogPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="about" element={<AboutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
