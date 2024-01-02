import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import AllUsers from "./Pages/Users/AllUsers";
import Womens from "./Pages/Users/Womens";
import LoginPage from "./Pages/Login/LoginPage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<AllUsers />} />
          <Route path="/womens" element={<Womens />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
