// Add Express
const express = require("express");

// Initialize Express
const app = express();

const user = require("./user/user");

app.use(express.json());
app.use("./user/user", user.router);

// Initialize server
app.listen(3200, () => {
  console.log("Running on port 5000.");
});

module.exports = app;