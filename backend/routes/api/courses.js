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
const User = require("../../models/User");
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
        created_by: payload.username,
        title: req.body.title,
        tags: req.body.tags,
    });

    await newCourse
        .save()
        .then((course) => res.json(course))
        .catch((err) => console.log(err));
    
        user_id = payload.user_id;

    try {
        const user_doc = await User.findByIdAndUpdate( {_id: user_id}, {
            $push: { "createdCourses" : newCourse._id}
        })

        await user_doc
            .save()
            .then(user => console.log(user))
            .catch(err => console.log(err))
    } catch (err) {
        res.json({ message: err })
    }

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
        })
        .catch(err => console.log(err));

    // await newLecture;

    let courseId = req.body.courseId;
    // make update to course, include course in the request body
    try {
        // updating the actual course document
        const course_doc_final = await Course.findByIdAndUpdate( { _id: courseId }, { $push : { "lectures": createdLecture._id }} , {upsert : true})

        await course_doc_final
            .save()
            .then(course => res.json(course))
            .catch(err => console.log(err))
    } catch (error) {
        // console.log(error)
        res.json({message: error})
    }
})

router.get("/get_course/:id", async (req, res) => {
    const token = req.headers['authorization'].split(' ')[1];
    try {
        const payload = jwt.verify(token, process.env.secretOrKey)
    } catch (error) {
        res.json({ message: "Not authorized" })
    }

    let courseId = req.params.id;

    // check if enrolled
    user_id = payload.user_id;

    // get all enrolled courses for current user

    var enrolledCourses = []
    try {
        let user = await User.findOne({ _id: user_id }).orFail();

        await user;
    
        enrolledCourses = user.enrolledCourses 
    } catch (error) {
        console.log(error)
    }

    var enrolled = false;
    if (enrolledCourses.includes(courseId)) {
        enrolled = true;
    }

    res.json({"enrolled": enrolled})

    try {
        const course_doc = await Course.findOne({ _id: courseId});
        return res.json(course_doc)
    } catch (error) {
        return res.json({ error: "Some error"} )
    }

})

router.get("/get_lectures/:id", async (req, res) => {
    const token = req.headers['authorization'].split(' ')[1];

    try {
        const payload = jwt.verify(token, process.env.secretOrKey)
    } catch (error) {
        res.json( {message: "Not authorized" })
    }

    // let courseId = req.body.courseId;
    let courseId = req.params.id

    try {
        const course_doc = await Course.findOne({ _id: courseId });
        let lectures = course_doc.lectures;
        return res.json(lectures)
    } catch (err) {
        // console.log(err)
        return res.json({ error: "Some error, cannot find course" })
    }
})

router.get("/get_all_courses", async (req, res) => {
    const token = req.headers['authorization'].split(' ')[1];

    try {
        const payload = jwt.verify(token, process.env.secretOrKey)
    } catch (error) {
        res.json( {message: "Not authorized" })
    }

    let courses_doc = Course.find({})

    await courses_doc
    .then(courses => res.json(courses))
    .catch(err => console.log(err));
})


module.exports = router;
