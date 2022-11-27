import { Routes, BrowserRouter, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Layout from "./pages/Layout";
import NotificationPage from "./pages/NotificationPage";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="Notifications" element={<NotificationPage />} />
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
