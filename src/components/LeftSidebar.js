import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import axios from "axios";
import "./LeftSidebar.css";

function LeftSidebar() {
  const [shipmentCount, setShipmentCount] = useState(0);

  useEffect(() => {
    // Fetch the count of shipments from the backend
    const fetchShipmentCount = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/shipments/count"
        );
        setShipmentCount(response.data.count); // Set the count in state
      } catch (error) {
        console.error("Error fetching shipment count:", error);
      }
    };

    fetchShipmentCount();
  }, []);

  return (
    <div className="left-sidebar">
      <h3>Shipments Overview</h3>
      <p>Total Shipments: {shipmentCount}</p>

      <nav>
        <ul>
          <li>
            <Link to="/sender-form">Sender</Link>
          </li>
          <li>
            <Link to="/receiver-form">Receiver</Link>
          </li>
          <li>
            <Link to="/shipment-form">Shipment</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default LeftSidebar;
