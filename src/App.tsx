import { Routes, BrowserRouter, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import Layout from "./Pages/Layout";
import NotificationPage from "./Pages/NotificationPage";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="NotificationPage" element={<NotificationPage />} />
          <Route path="loginPage" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
