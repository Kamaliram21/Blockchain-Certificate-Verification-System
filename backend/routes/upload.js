const express = require("express");

const router = express.Router();

router.post("/upload", (req, res) => {

    res.json({
        message: "Certificate Uploaded Successfully"
    });

});

module.exports = router;
