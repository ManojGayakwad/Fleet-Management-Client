import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddVehicle from "./pages/AddVehicle";
import AddDriver from "./pages/AddDriver";
// import Login from "./pages/Login/Login";
import Login from "./pages/Dashboard/Login/Login";
import LiveView from "./pages/LiveLocation/Livelocation";
import DashboardContent from "./pages/Dashboard/DashboardContent/DashboardContent";
import ContactUs from "./pages/ContactUs";
// import VehicleDetails from "./pages/VehicleDetails";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addVehicle" element={<AddVehicle />} />
        <Route path="/addDriver" element={<AddDriver />} />
        <Route path="/livelocation" element={<LiveView />} />
        <Route path="/contactUs" element={<ContactUs/>}/>
        {/* <Route path="/vehicleDetails" element={<VehicleDetails/>}/> */}
        <Route path="/dashboardContent" element={<DashboardContent />} />
      </Routes>
    </>
  );
}

export default App;
