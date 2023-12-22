import { Routes, Route } from "react-router";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/Login/LoginPage";
import { BrowserRouter } from "react-router-dom";
import RegisterPage from "./Pages/Register/RegisterPage";
import AllCategories from "./Pages/Users/AllUsers";
import Womens from "./Pages/Users/Womens";
import Kids from "./Pages/Users/Kids";
import Notfound from "./Pages/NotFound/Notfound";
import MensRoutes from "./Pages/Mens/MensRoutes";
import UserRoutes from "./Pages/Users/UserRoutes";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Homepage */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/shop/*">
          <Route path="*" element={<Notfound />} />
          <Route index element={<AllCategories />} />
          <Route path="womens" element={<Womens />} />
          <Route path="mens/*" element={<MensRoutes />} />
          <Route path="kids" element={<Kids />} />
        </Route>
        <Route path="/users/*" element={<UserRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
