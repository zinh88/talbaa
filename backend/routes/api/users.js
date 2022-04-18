const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const keys = require("../../config/keys");
// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
// Load User model
const User = require("../../models/User");
const Course = require("../../models/Course");
const crypto = require("crypto");
const dotenv = require("dotenv");

dotenv.config();
router.post("/register", async (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  try {
    let user = await User.findOne({ email: req.body.email });

    // console.log("GETTING HERE --------------- ")
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        // generate unique user ID
        user_id: crypto.randomUUID(),
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      const payload = {
        user_id: newUser.user_id,
        username: newUser.username,
      };
      // Sign token
      jwt.sign(
        payload,
        process.env.secretOrKey,
        {
          expiresIn: 31556926, // 1 year in seconds
        },
        (err, token) => {
          res.json({
            success: true,
            token: "Bearer " + token,
          });
        }
      );
      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  } catch (error) {
    console.log(error);
  }
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", async (req, res) => {
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
  // Find user by email

  let user = await User.findOne({ email: email });

  // User.findOne({ email })
  // .then(user => {
  // Check if user exists
  if (!user) {
    return res.status(404).json({ emailnotfound: "Email not found" });
  }
  console.log(password);
  console.log(user.password);
  // Check password
  bcrypt
    .compare(password, user.password)
    .then((isMatch) => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          user_id: user.user_id,
          username: user.username,
        };
        // Sign token
        jwt.sign(
          payload,
          process.env.secretOrKey,
          {
            expiresIn: 31556926, // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    })
    .catch((err) => console.log(err));
  // });
});

router.get("/get_user", async (req, res) => {
  const token = req.headers["authorization"].split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.secretOrKey);
    res.username = payload.username;
    console.log(res.username);
    res.json({ username: res.username });
  } catch (err) {
    console.log(err);
    res.status(403).json({ message: "Not authorized" });
  }
});

router.put("/enroll", async (req, res) => {
  const token = req.headers["authorization"].split(" ")[1];

  // var username;
  var user_id;
  try {
    const payload = jwt.verify(token, process.env.secretOrKey);
    // username = payload.username;
    user_id = payload.user_id;
  } catch (err) {
    console.log(err);
    res.status(403).json({ message: "Not authorized" });
  }

  try {
    console.log(req.body)
    const user_doc = await User.findOneAndUpdate(
      {user_id : user_id},
      { $addToSet: { enrolledCourses: req.body.courseId } },
      { new: true }
    );
    res.json(user_doc);
  } catch (error) {
    
    res.json({ message: "whoopes" });
  }
});

router.get("/get_enrolled_courses", async (req, res) => {
  console.log("/get_enrolled_courses");
  const token = req.headers["authorization"].split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.secretOrKey);
    const user_id = payload.user_id;
    const user = await User.findOne({ user_id: user_id });
    const enrolledCourses = user.enrolledCourses;
    return res.json(enrolledCourses);
  } catch (error) {
    console.log
    res.json({ message: "Server Error" });
  }
});

module.exports = router;
