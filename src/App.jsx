import { Route, Routes } from "react-router";
import LoginPage from "./Pages/Login/LoginPage";
import NewApp from "./NewApp";
import Employees from "./Empoyess";
import UserDetails from "./Pages/UserDeatils/UserDetails";

const App = () => {
  // eslint-disable-next-line no-unused-vars
  return (
    <Routes>
      <Route path="/" element={<NewApp />} />
      <Route path="/:userId" element={<UserDetails />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/emp" element={<Employees />} />
    </Routes>
  );
};
export default App;