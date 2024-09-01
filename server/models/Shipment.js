const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the schema for a shipment
const shipmentSchema = new Schema({
  sender: { type: String, required: true },
  receiver: { type: String, required: true },
  shipment: { type: String, required: true },
  trackId: { type: String, required: true, unique: true },
});

// Create a model using the schema
const Shipment = mongoose.model("Shipment", shipmentSchema);

module.exports = Shipment;
