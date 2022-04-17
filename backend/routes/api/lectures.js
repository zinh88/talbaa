const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const validateCreateCourse = require("../../validation/createCourse")
const validateAddContent = require("../../validation/addContent")
const crypto = require('crypto')
const dotenv = require("dotenv");
const Course = require("../../models/Course")
const Lecture = require("../../models/Lecture")
const Content = require("../../models/Content")
dotenv.config()

router.put("/add_lec_content", async (req, res) => {
    const { errors, isValid } = validateAddContent(req.body);

    const token = req.headers["authorization"].split(" ")[1];

    var payload;
    try {
        payload = jwt.verify(token, process.env.secretOrKey);
    } catch (err) {
        return res.json({message: "Not authorized"})
    }

    const newContent = new Content({
        title: req.body.title,
        cld_reference: req.body.cld_reference,
        filetype: req.body.filetype
    })

    var createdContentEntry
    await newContent
    .save()
    .then(content => {
        createdContentEntry = content
    })
    .catch(err => console.log(err))

    console.log("REACHED HERE")
    let lectureId = req.body.lectureId;

    try {
        const lecture_doc = await Lecture.findByIdAndUpdate( 
            {_id: lectureId },
            { $push : { "content": createdContentEntry._id } }, 
            {upsert : true } )
        
            await lecture_doc
            .save()
            .then(lecture => res.json(lecture))
            .catch(err => console.log(err));

    } catch (err) {
        res.json( { message: err })
    }
});

router.get("/get_lecture", async (req, res) => {
    const token = req.headers['authorization'].split(' ')[1];

    try {
        const payload = jwt.verify(token, process.env.secretOrKey)
    } catch (error) {
        res.json( {message: "Not authorized" })
    }

    let lectureId = req.body.lectureId;

    try {
        const lec_doc = await Lecture.findOne( {
            _id: lectureId
        });
        // let contentList = lec_doc.content;
        return res.json(lec_doc)
    } catch (error) {
        return res.json( {error: error || "Some error, cannot find lecture"})
    }

})

module.exports = router;