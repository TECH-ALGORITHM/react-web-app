import React, { useState } from "react";
import "./SenderForm.css"; // Ensure this file exists

function SenderForm({ onNext }) {
  const [senderName, setSenderName] = useState("");
  const [senderAddress, setSenderAddress] = useState("");

  const isFieldFilled = (field) => field.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sender Name:", senderName);
    console.log("Sender Address:", senderAddress);

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
        <h2>Sender Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Sender Name:</label>
            <input
              type="text"
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Sender Address:</label>
            <input
              type="text"
              value={senderAddress}
              onChange={(e) => setSenderAddress(e.target.value)}
              required
            />
          </div>
          <button type="submit">Next</button>
        </form>
      </div>

      <div className="status-bar">
        <div
          className={`status-label ${
            isFieldFilled(senderName) ? "filled" : ""
          }`}
        >
          Sender Name
        </div>
        <div
          className={`status-label ${
            isFieldFilled(senderAddress) ? "filled" : ""
          }`}
        >
          Sender Address
        </div>
      </div>
    </div>
  );
}

export default SenderForm;
