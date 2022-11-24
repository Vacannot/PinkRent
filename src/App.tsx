import { Routes, BrowserRouter, Route } from "react-router-dom";
import StartPage from "./Pages/Layout";
import LoginPage from "./Pages/LoginPage";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="loginPage" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
