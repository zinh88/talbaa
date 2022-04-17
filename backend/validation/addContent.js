const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateAddContent(data) {
    let errors = {}

    data.lectureId = !isEmpty(data.lectureId) ? data.lectureId : "";
    data.title = !isEmpty(data.title) ? data.title : "";
    data.cld_reference = !isEmpty(data.cld_reference) ? data.cld_reference : "";
    data.filetype = !isEmpty(data.filetype) ? data.filetype : "";
    
    if (Validator.isEmpty(data.cld_reference)) {
        errors.cld_reference = "Cloudinary reference is a required field";
    }

    if (Validator.isEmpty(data.filetype)) {
        errors.filetype = ""
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}