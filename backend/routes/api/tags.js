const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
const { Tags } = require("../../models/Tags")
dotenv.config()

router.get("/get_tags", async(req, res) => {
    const recvTags = await Tags.find();
    res.send(recvTags)
});

module.exports = router;