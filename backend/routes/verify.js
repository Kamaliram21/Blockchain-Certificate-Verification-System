const express = require("express");

const router = express.Router();

router.post("/verify", (req, res) => {

    res.json({

        status: "Verified"

    });

});

module.exports = router;
