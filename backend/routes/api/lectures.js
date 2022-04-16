const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const validateCreateCourse = require("../../validation/createCourse")
const crypto = require('crypto')
const dotenv = require("dotenv");
const Course = require("../../models/Course")
const Lecture = require("../../models/Lecture")
dotenv.config()

