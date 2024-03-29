import { Route, Routes } from "react-router";
import NewApp from "./NewApp";
// import Employees from "./Empoyess";
import UserDetails from "./Pages/UserDeatils/UserDetails";
import ShopRoutes from "./Pages/Shop/ShopRoutes";
import Layout from "./Layout/Layout";
import LoginPage from "./Pages/Login/LoginPage";
import Rendering from "./Pages/Rendering/Rendering";

const App = () => {
  // eslint-disable-next-line no-unused-vars
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<NewApp />} />
        <Route path="/render" element={<Rendering />} />
        <Route path="/:userId" element={<UserDetails />} />
        {/* <Route path="/emp" element={<Employees />} /> */}
        {/* APPROACH 1 */}
        {/* <Route path="/shop/*">
        <Route index element={<Shop />} />
        <Route path="mens" element={<Mens />} />
        <Route path="womens" element={<Womens />} />
      </Route> */}
        {/* APPROACH 2 */}
        <Route path="/shop/*" element={<ShopRoutes />} />
      </Route>
    </Routes>
  );
};
export default App;
