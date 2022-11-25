import { Routes, BrowserRouter, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Layout from "./pages/Layout";
import NotificationPage from "./pages/NotificationPage";
import ProductPage from "./pages/productPage";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="NotificationPage" element={<NotificationPage />} />
          <Route path="loginPage" element={<LoginPage />} />
          <Route path="productPage" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
