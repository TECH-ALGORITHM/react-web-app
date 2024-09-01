const express = require("express");
const router = express.Router();
const Shipment = require("../models/Shipment"); // Ensure this path is correct

// POST route to handle form submission
router.post("/submit", async (req, res) => {
  const { sender, receiver, shipment, trackId } = req.body;
  const newShipment = new Shipment({ sender, receiver, shipment, trackId });

  try {
    await newShipment.save();
    res.status(200).send("Shipment data saved successfully");
  } catch (err) {
    console.error("Error saving shipment data:", err);
    res.status(500).send("Error saving shipment data");
  }
});

// GET route to fetch the count of shipments
router.get("/count", async (req, res) => {
  try {
    const count = await Shipment.countDocuments(); // Should use Shipment model
    res.json({ count });
  } catch (err) {
    console.error("Error fetching shipment count:", err);
    res.status(500).send("Error fetching shipment count");
  }
});

module.exports = router;
