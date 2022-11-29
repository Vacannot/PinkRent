import { Routes, BrowserRouter, Route } from "react-router-dom";
import LoginPage from "./xxxxxxxxxx/LoginPage";
import RegisterPage from "./xxxxxxxxxx/RegisterPage";
import Layout from "./layout/Layout";
import NotificationPage from "./xxxxxxxxxx/NotificationPage";
import ProfilePage from "./xxxxxxxxxx/ProfilePage";
import AddProductPage from "./xxxxxxxxxx/AddProductPage";
import ProductDetailPage from "./xxxxxxxxxx/ProductDetailPage";
import CatalogPage from "./xxxxxxxxxx/CatalogPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
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
