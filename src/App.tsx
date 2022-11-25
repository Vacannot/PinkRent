import {Routes, BrowserRouter, Route} from "react-router-dom";
import StartPage from "./pages/Layout";
import LoginPage from "./pages/LoginPage";
import {FBTest} from "./backend/firebase";
function App() {
  FBTest();
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
