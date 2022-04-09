const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const keys = require("../../config/keys");
// Load input validation
const validateCreateCourse = require("../../validation/createCourse")
// Load Course model
const Course = require("../../models/Course")
const crypto = require('crypto')
const dotenv = require("dotenv");
dotenv.config()

router.post("/create_course", (req, res) => {
    const {errors, isValid} = validateCreateCourse(req.body);

    if (!isValid) {
        return res.status(400).json(errors)
    }
    const token = req.headers['authorization'].split(' ')[1];
    const payload = jwt.verify(token, process.env.secretOrKey)
    const newCourse = new Course({
        course_id : crypto.randomUUID(),
        description : req.body.description,
        // created_by : req.body.created_by,
        created_by : payload.user_id,
        title : req.body.title 
    });

    newCourse
        .save()
        .then(course => res.json(course))
        .catch(err => console.log(err));
});

module.exports = router;