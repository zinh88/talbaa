const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateAddLecture(data) {
    let errors = {};

    data.title = !isEmpty(data.title) ? data.title : "";
    data.courseId = !isEmpty(data.courseId) ? data.courseId : "";

   if (Validator.isEmpty(data.title)) {
       errors.title = "Title is a required field"
   }
   
   if (Validator.isEmpty(data.courseId)) {
       errors.courseId = "Need a course ID to refer to"
   }

   return {
       errors,
       isValid: isEmpty(errors)
   }
} 