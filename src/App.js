import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import LeftSidebar from "./components/LeftSidebar";
import BarcodeGenerator from "./components/BarcodeGenerator";
import "./App.css";
function App() {
  return (
    <Router>
      <div>
        <div className="app-container">
          <LeftSidebar /> {/* Add Left Sidebar */}
          <div className="main-content">
            <Navbar />

            <Routes>
              <Route path="/" element={<Sidebar />} />
              <Route path="/barcode" element={<BarcodeGenerator />} />
            </Routes>
          </div>{" "}
        </div>
      </div>
    </Router>
  );
}

export default App;
