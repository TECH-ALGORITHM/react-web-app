// import React, { useState } from "react";

// function ShipmentForm() {
//   const [shipmentId, setShipmentId] = useState("");
//   const [shipmentDetails, setShipmentDetails] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log("Shipment ID:", shipmentId);
//     console.log("Shipment Details:", shipmentDetails);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Shipment Form</h2>
//       <div>
//         <label>Shipment ID:</label>
//         <input
//           type="text"
//           value={shipmentId}
//           onChange={(e) => setShipmentId(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label>Shipment Details:</label>
//         <input
//           type="text"
//           value={shipmentDetails}
//           onChange={(e) => setShipmentDetails(e.target.value)}
//           required
//         />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default ShipmentForm;
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const [formData, setFormData] = useState({
    sender: "",
    receiver: "",
    shipment: "",
    trackId: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(""); // Clear error on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if trackId contains exactly 10 digits
    if (!/^\d{10}$/.test(formData.trackId)) {
      setError("Track ID must be exactly 10 digits.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/shipments/submit",
        formData
      );

      alert(response.data);
      navigate("/barcode", { state: formData });
    } catch (error) {
      console.error("There was an error submitting the form:", error);
      alert("There was an error submitting the form.");
    }
  };

  const isFieldFilled = (field) => formData[field] !== "";

  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <h3>Shipment Form</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="sender">Sender</label>
            <input
              type="text"
              id="sender"
              name="sender"
              value={formData.sender}
              onChange={handleChange}
              placeholder="Enter sender name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="receiver">Receiver</label>
            <input
              type="text"
              id="receiver"
              name="receiver"
              value={formData.receiver}
              onChange={handleChange}
              placeholder="Enter receiver name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="shipment">Shipment</label>
            <input
              type="text"
              id="shipment"
              name="shipment"
              value={formData.shipment}
              onChange={handleChange}
              placeholder="Enter shipment details"
            />
          </div>
          <div className="form-group">
            <label htmlFor="trackId">Track ID</label>
            <input
              type="number"
              id="trackId"
              name="trackId"
              value={formData.trackId}
              onChange={handleChange}
              placeholder="Enter track ID"
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit">SAVE</button>
        </form>
      </div>
      <div className="status-bar">
        <div
          className={`status-label ${isFieldFilled("sender") ? "filled" : ""}`}
        >
          Sender
        </div>
        <div
          className={`status-label ${
            isFieldFilled("receiver") ? "filled" : ""
          }`}
        >
          Receiver
        </div>
        <div
          className={`status-label ${
            isFieldFilled("shipment") ? "filled" : ""
          }`}
        >
          Shipment
        </div>
        <div
          className={`status-label ${isFieldFilled("trackId") ? "filled" : ""}`}
        >
          Track ID
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
