import {Routes, BrowserRouter, Route} from "react-router-dom";
import StartPage from "./pages/Layout";
import LoginPage from "./pages/LoginPage";
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
