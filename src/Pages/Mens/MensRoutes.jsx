import { Route, Routes } from "react-router";
import Mens from "../Users/Mens";
import Jackets from "./Jackets";
import Shoes from "./Shoes";
import Shirts from "./Shirts";

const MensRoutes = () => {
  return (
    <Routes>
      <Route index element={<Mens />} />
      <Route path="/jackets" element={<Jackets />} />
      <Route path="/shoes" element={<Shoes />} />
      <Route path="/shirts" element={<Shirts />} />
    </Routes>
  );
};

export default MensRoutes;
