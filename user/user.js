const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello World! (using get)");
}
);

router.post("/", (req, res) => {
    res.send("Hello World! (using post)");
}
);

module.exports = router;