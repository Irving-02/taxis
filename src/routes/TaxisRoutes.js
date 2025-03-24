import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Vehicles from "../pages/Vehicles/Vehicles";
import Cobros from "../pages/Cobros/Cobros";
import Expenses from "../pages/Expenses/Expenses";

const TaxisRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/vehicles' element={<Vehicles />} />
      <Route path='/payments' element={<Cobros />} />
      <Route path='/expenses' element={<Expenses />} />
    </Routes>
  );
};

export default TaxisRoutes;
