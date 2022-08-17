// Add Express
const express = require("express");

// Initialize Express
const app = express();

// Create GET request
app.get("/", (req, res) => {
  res.send("Express on Vercel using get");
});

app.post("/", (req, res) => {
    res.send("Express on Vercel using post");
} );

// Initialize server
app.listen(3200, () => {
  console.log("Running on port 5000.");
});

module.exports = app;