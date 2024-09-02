import React, { useState } from "react";
import "./ReceiverForm.css"; // Ensure this file exists

function ReceiverForm({ onNext }) {
  const [receiverName, setReceiverName] = useState("");
  const [receiverAddress, setReceiverAddress] = useState("");

  const isFieldFilled = (field) => field.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Receiver Name:", receiverName);
    console.log("Receiver Address:", receiverAddress);

    // Call the onNext function to move to the next form
    if (onNext) {
      onNext();
    } else {
      console.error("onNext function is not defined");
    }
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
          <button type="submit">Next</button>
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
