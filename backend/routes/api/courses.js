const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const keys = require("../../config/keys");
// Load input validation
const validateAddLecture = require("../../validation/addLecture");
const validateCreateCourse = require("../../validation/createCourse")
// Load Course model
const Course = require("../../models/Course");
const Lecture = require("../../models/Lecture");
const crypto = require("crypto");
const dotenv = require("dotenv");
dotenv.config();

router.post("/create_course", async (req, res) => {
    const { errors, isValid } = validateCreateCourse(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }
    const token = req.headers["authorization"].split(" ")[1];

    var payload;
    try {
        payload = jwt.verify(token, process.env.secretOrKey);
    } catch (err) {
        return res.json({message: "Not authorized"})
    }

    const newCourse = new Course({
        // course_id : crypto.randomUUID(),
        description: req.body.description,
        created_by: payload.user_id,
        title: req.body.title,
        tags: req.body.tags,
    });

    newCourse
        .save()
        .then((course) => res.json(course))
        .catch((err) => console.log(err));
});

router.put("/add_lecture", async (req, res) => {
    const { errors, isValid } = validateAddLecture(req.body)

    if (!isValid) {
        return res.status(400).json(errors)
    }
    const token = req.headers['authorization'].split(' ')[1];
    try {
        const payload = jwt.verify(token, process.env.secretOrKey)
    } catch (error) {
        return res.json({message: "Not authorized"})
    }

    const newLecture = new Lecture({
        title: req.body.title
    })

    var createdLecture

    await newLecture
        .save()
        .then(lecture => {
            createdLecture = lecture
            // res.json(lecture)
        }
        )
        .catch(err => console.log(err));

    // await newLecture;

    let courseId = req.body.courseId;
    // make update to course, include course in the request body
    try {
        // updating the actual course document
        const course_doc_final = await Course.findByIdAndUpdate( { _id: courseId }, { $push : { "lectures": createdLecture }} , {upsert : true})

        await course_doc_final
            .save()
            .then(course => res.json(course))
            .catch(err => console.log(err))
    } catch (error) {
        // console.log(error)
        res.json({message: error})
    }
})

router.get("/get_course", async (req, res) => {
    const token = req.headers['authorization'].split(' ')[1];
    try {
        const payload = jwt.verify(token, process.env.secretOrKey)
    } catch (error) {
        res.json({ message: "Not authorized" })
    }

    let courseId = req.body.courseId;

    try {
        const course_doc = await Course.findOne({ _id: courseId});
        return res.json(course_doc)
    } catch (error) {
        return res.json({ error: "Some error"} )
    }
})

router.get("/get_lectures", async (req, res) => {
    const token = req.headers['authorization'].split(' ')[1];

    try {
        const payload = jwt.verify(token, process.env.secretOrKey)
    } catch (error) {
        res.json( {message: "Not authorized" })
    }

    let courseId = req.body.courseId;

    try {
        const course_doc = await Course.findOne({ _id: courseId });
        let lectures = course_doc.lectures;
        return res.json(lectures)
    } catch (err) {
        // console.log(err)
        return res.json({ error: "Some error, cannot find course" })
    }
})

module.exports = router;
