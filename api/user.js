const express = require("express");
const router = express.Router();


router.get("/", async (req, res) => {
    try {
        res.json({
            status: 200,
            message: "Você utilizou get",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
});

router.post("/", async (req, res) => {
    try {
        res.json({
            status: 200,
            message: "Você utilizou post",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
}
);


module.exports = router;