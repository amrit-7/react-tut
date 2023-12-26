import { Route, Routes } from "react-router";
import AllUsers from "./AllUsers";
import UserDetails from "./UserDetails";

const UserRoutes = () => {
  return (
    <Routes>
      <Route index element={<AllUsers />} />
      <Route path="/:id" element={<UserDetails />} />
    </Routes>
  );
};

export default UserRoutes;
