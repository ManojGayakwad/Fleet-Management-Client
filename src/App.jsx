import { Route, Routes } from "react-router-dom";
import AddDriver from "./pages/AddDriver";
import AddVehicle from "./pages/AddVehicle";
import ContactUs from "./pages/ContactUs";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardContent from "./pages/Dashboard/DashboardContent/DashboardContent";
import LiveView from "./pages/LiveLocation/Livelocation";
import Login from "./pages/Login/Login";
import VehicleDetail from "./pages/VehicleDetail";
import NewFuel from "./pages/Fuel/NewFuel"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addVehicle" element={<AddVehicle />} />
        <Route path="/addDriver" element={<AddDriver />} />
        <Route path="/livelocation" element={<LiveView />} />
        <Route path="/fuel" element={<NewFuel/>}/>

        <Route path="/dashboardContent" element={<DashboardContent />} />
        <Route path="/vehicledetail" element={<VehicleDetail />}/>
        <Route path="/contactUs" element={<ContactUs />}/>
      </Routes>
    </>
  );
}

export default App;

