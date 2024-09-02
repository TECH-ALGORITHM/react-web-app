import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ShipmentForm.css";

function ShipmentForm() {
  const [formData, setFormData] = useState({
    shipment: "",
    typeOfShipment: "",
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
    <div className="ShipmentForm-container">
      <div className="ShipmentForm">
        <h3>Shipment Form</h3>
        <form onSubmit={handleSubmit}>
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
            <label htmlFor="typeOfShipment">Type of Shipment</label>
            <input
              type="text"
              id="typeOfShipment"
              name="typeOfShipment"
              value={formData.typeOfShipment}
              onChange={handleChange}
              placeholder="Enter type of shipment"
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit">SAVE</button>
        </form>
      </div>
      <div className="status-bar">
        <div
          className={`status-label ${
            isFieldFilled("shipment") ? "filled" : ""
          }`}
        >
          Shipment
        </div>
        <div
          className={`status-label ${
            isFieldFilled("typeOfShipment") ? "filled" : ""
          }`}
        >
          Type of Shipment
        </div>
      </div>
    </div>
  );
}

export default ShipmentForm;
