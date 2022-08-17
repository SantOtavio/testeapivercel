// Add Express
const express = require("express");

// Initialize Express
const app = express();

const user = require("./api/user");

app.use(express.json());
app.use("./api/user", user);


app.get("/", (req, res) => {
    res.send("Hello World");
}
);
// Initialize server
app.listen(3200, () => {
    console.log("Running on port 5000.");
});

module.exports = app;