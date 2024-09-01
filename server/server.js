const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const shipmentRoutes = require("./routes/shipments");
const app = express();
app.use(cors());
app.use(express.json()); // To parse JSON bodies in POST requests

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/mydatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.use("/api/shipments", shipmentRoutes);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
