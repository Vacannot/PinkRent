import { Routes, BrowserRouter, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage";
import Layout from "./layout/Layout";
import NotificationPage from "./pages/NotificationPage";
import ProductPage from "./pages/productPage";
import ProfilePage from "./pages/ProfilePage";
import AddProductPage from "./pages/AddProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CatalogPage from "./pages/CatalogPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="loginPage" element={<LoginPage />} />
          <Route path="/productPage" element={<ProductPage />} />
          <Route path="notifications" element={<NotificationPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="add" element={<AddProductPage />} />
          <Route path="/detail/:id" element={<ProductDetailPage />} />
          <Route path="catalog" element={<CatalogPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
