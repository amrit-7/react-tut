import { Route, Routes } from "react-router";
import NewApp from "./Pages/NewApp";
import Employees from "./Empoyess";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NewApp />} />
      <Route path="/employees" element={<Employees />} />
    </Routes>
  );
};
export default App;
