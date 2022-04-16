const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const keys = require("../../config/keys");
// Load input validation
const validateCreateCourse = require("../../validation/createCourse");
// Load Course model
const Course = require("../../models/Course");
const Lecture = require("../../models/Lecture");
const crypto = require("crypto");
const dotenv = require("dotenv");
dotenv.config();

router.post("/create_course", (req, res) => {
  const { errors, isValid } = validateCreateCourse(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  const token = req.headers["authorization"].split(" ")[1];
  const payload = jwt.verify(token, process.env.secretOrKey);
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

router.put("/add_lecture", (req, res) => {
    const {errors, isValid} = validateAddLecture(req.body)

    if (!isValid) {
        return res.status(400).json(errors)
    }
    const token = req.headers['authorization'].split(' ')[1];
    const payload = jwt.verify(token, process.env.secretOrKey)

//     const newLecture = new Lecture({
//         title: req.body.title
//     })

//     var createdLecture

//     newLecture
//     .save()
//     .then(lecture => {
//         createdLecture = lecture
//         res.json(lecture)
//     }
//         )
//     .catch(err => console.log(err));

//     let courseId = req.body.course_id;

    // make update to course, include course in the request body
    const course_doc = await Course.findOne({ _id: courseId });

    let lecture_list = course_doc.lectures;
    lecture_list.push(createdLecture)
    let update = {lectures: lecture_list}
    await course_doc.updateOne(update)

    course_doc
    .save()
    .then(course => res.json(course))
    .catch(err => console.log(err))
})

module.exports = router;
