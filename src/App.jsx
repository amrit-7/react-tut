import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import AllUsers from "./Pages/Users/AllUsers";
import Womens from "./Pages/Users/Womens";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AllUsers />} />
          <Route path="/womens" element={<Womens />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
