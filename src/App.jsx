import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddVehicle from "./pages/AddVehicle";
import AddDriver from "./pages/AddDriver";



function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addVehicle" element={<AddVehicle />} />
        <Route path="/addDriver" element={<AddDriver />} />
      </Routes>
    </>
  );
}

export default App;
