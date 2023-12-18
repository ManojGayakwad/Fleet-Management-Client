import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddVehicle from "./pages/AddVehicle";
import AddDriver from "./pages/AddDriver";
import Login from "./pages/Login/Login";
import LiveView from "./pages/LiveLocation/Livelocation";
import DashboardContent from "./pages/Dashboard/DashboardContent/DashboardContent";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addVehicle" element={<AddVehicle />} />
        <Route path="/addDriver" element={<AddDriver />} />
        <Route path="/livelocation" element={<LiveView />} />
        <Route path="/dashboardContent" element={<DashboardContent />} />
      </Routes>
    </>
  );
}

export default App;
