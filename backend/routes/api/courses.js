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
const mongoose = require("mongoose");
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
    console.log(newCourse);

    try {
        const user_doc = await User.findOneAndUpdate( {user_id: user_id}, {
            $addToSet: { createdCourses : newCourse._id.toString()}
        }, {new: true} )


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
            res.json(lecture)
        })
        .catch(err => console.log(err));

    // await newLecture;

    let courseId = req.body.courseId;
    // make update to course, include course in the request body
    try {
        // updating the actual course document
        const course_doc_final = await Course.findByIdAndUpdate( { _id: courseId }, { $push : { "lectures": createdLecture._id.toString(), "lecture_names": createdLecture.title }} , {upsert : true})

        await course_doc_final
            .save()
            // .then(course => res.json(course))
            .then(course => console.log(course))
            .catch(err => console.log(err))
    } catch (error) {
        // console.log(error)
        res.json({message: error})
    }
})

router.delete("/lecture/:cid/:lid/:name", async (req, res)=> {
    console.log("DELETELTELTET");
    // const { errors, isValid } = validateAddLecture(req.body)
    const token = req.headers['authorization'].split(' ')[1];
    try {
        const payload = jwt.verify(token, process.env.secretOrKey)
    } catch (error) {
        return res.json({message: "Not authorized"})
    }
    const lec_id = req.params.lid;
    const course_id = req.params.cid;
    const lec_name = req.params.name;
    console.log(lec_id);
    const course_doc = await Course.findByIdAndUpdate( course_id, 
        { $pull : { "lectures": lec_id, "lecture_names": lec_name }},
        {new :true}
    )
    console.log(course_doc)
    res.json(course_doc)

})

router.get("/get_course/:id", async (req, res) => {
    const token = req.headers['authorization'].split(' ')[1];

    var payload;
    try {
        payload = jwt.verify(token, process.env.secretOrKey)
    } catch (error) {
        res.json({ message: "Not authorized" })
    }

    let courseId = req.params.id;
    console.log(courseId)

    // check if enrolled
    user_id = payload.user_id;

    console.log(user_id);

    // get all enrolled courses for current user

    var enrolledCourses = []
    var createdCourses = []
    try {
        let user = await User.findOne({ user_id: user_id }).orFail();

        await user;
        console.log(user);
        enrolledCourses = user.enrolledCourses 
        createdCourses = user.createdCourses
    } catch (error) {
        console.log(error)
    }

    var enrolled = false;
    var creator = false;
    if (enrolledCourses.includes(courseId)) {
        enrolled = true;
    }
    if (createdCourses.includes(courseId)) {
        creator = true;
    }

    // res.json({"enrolled": enrolled})
    // var enrolledJson = {"enrolled": enrolled}

    try {
        const course_doc = await Course.findById(courseId);
        console.log(course_doc);
        res.json({
            course: course_doc,
            enroll: enrolled,
            creator: creator
        });
        // res.json(course_doc)
        return res
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

router.get("/get_enrolled", async (req, res) => {
    console.log("/get_enrolled");
    const token = req.headers["authorization"].split(" ")[1];
    try {
        const payload = jwt.verify(token, process.env.secretOrKey);
        const user_id = payload.user_id;
        const user = await User.findOne({ user_id: user_id });
        const enrolledCourses = user.enrolledCourses;
        const cids = enrolledCourses.map(mongoose.Types.ObjectId);
        console.log(cids);
        const courses = await Course.find({ _id: { $in: cids } })
        return res.json({ courses: courses });
    } catch (error) {
        console.log(error)
        res.json({ message: "Server Error" });
    }
});

router.get("/get_created", async (req, res) => {
    console.log("/get_created");
    const token = req.headers["authorization"].split(" ")[1];
    try {
        const payload = jwt.verify(token, process.env.secretOrKey);
        const user_id = payload.user_id;
        const user = await User.findOne({ user_id: user_id });
        const createdCourses = user.createdCourses;
        const cids = createdCourses.map(mongoose.Types.ObjectId);
        console.log(cids);
        const courses = await Course.find({ _id: { $in: cids } })
        return res.json({ courses: courses });
    } catch (error) {
        console.log(error)
        res.json({ message: "Server Error" });
    }
});


module.exports = router;
