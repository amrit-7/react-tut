import { Routes, Route } from "react-router";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/Login/LoginPage";
import { BrowserRouter } from "react-router-dom";
import RegisterPage from "./Pages/Register/RegisterPage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Homepage */}
        <Route path="/login/register" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
};
// route   root
export default App;
