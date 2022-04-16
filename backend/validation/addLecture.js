const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateAddLecture(data) {
    let errors = {};

   data.title = !isEmpty(data.title) ? data.title : "";


   if (Validator.isEmpty(data.title)) {
       errors.title = "Title is a required field"
   }
   return {
       errors,
       isValid: isEmpty(errors)
   }
} 