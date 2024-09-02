import React, { useState } from "react";
import "./ReceiverForm.css"; // Create a CSS file if not existing

function ReceiverForm() {
  const [receiverName, setReceiverName] = useState("");
  const [receiverAddress, setReceiverAddress] = useState("");

  const isFieldFilled = (field) => field !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Receiver Name:", receiverName);
    console.log("Receiver Address:", receiverAddress);
  };

  return (
    <div className="form-container">
      <div className="form-section">
        <h2>Receiver Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Receiver Name:</label>
            <input
              type="text"
              value={receiverName}
              onChange={(e) => setReceiverName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Receiver Address:</label>
            <input
              type="text"
              value={receiverAddress}
              onChange={(e) => setReceiverAddress(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="status-bar">
        <div
          className={`status-label ${
            isFieldFilled(receiverName) ? "filled" : ""
          }`}
        >
          Receiver Name
        </div>
        <div
          className={`status-label ${
            isFieldFilled(receiverAddress) ? "filled" : ""
          }`}
        >
          Receiver Address
        </div>
      </div>
    </div>
  );
}

export default ReceiverForm;
