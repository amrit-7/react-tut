import { Route, Routes } from "react-router";
import Mens from "./Mens";
import Shop from "./Shop";
import Womens from "./Womens";

const ShopRoutes = () => {
  return (
    <Routes>
      <Route index element={<Shop />} />
      <Route path="/mens" element={<Mens />} />
      <Route path="/womens" element={<Womens />} />
    </Routes>
  );
};

export default ShopRoutes;
