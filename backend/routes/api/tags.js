const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const Tags = require("../../models/Tags")
dotenv.config()

router.get("/get_tags", async(req, res) => {
    const recvTags = await Tags.find();
    res.send(recvTags)
});

router.post("/add_tag", (req, res) => {
    // not verifying this request
    const newTag = new Tags({
        name : req.body.name
    });

    newTag 
        .save()
        .then(tag => res.json(tag))
        .catch(err => console.log(err));
});

module.exports = router;