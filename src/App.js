import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import LeftSidebar from "./components/LeftSidebar";
import BarcodeGenerator from "./components/BarcodeGenerator";
import SenderForm from "./components/SenderForm";
import ReceiverForm from "./components/ReceiverForm";
import ShipmentForm from "./components/ShipmentForm";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <div className="app-container">
          <LeftSidebar /> {/* Left Sidebar for navigation */}
          <div className="main-content">
            <Navbar />

            <Routes>
              <Route path="/" element={<Sidebar />} />
              <Route path="/barcode" element={<BarcodeGenerator />} />
              <Route path="/sender-form" element={<SenderForm />} />
              <Route path="/receiver-form" element={<ReceiverForm />} />
              <Route path="/shipment-form" element={<ShipmentForm />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
