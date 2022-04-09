const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateCreateCourse(data) {
    let errors = {};

    data.created_at = !isEmpty(data.created_at) ? data.created_at : "";
    data.course_id = !isEmpty(data.course_id) ? data.course_id : "";
    data.description = !isEmpty(data.description) ? data.description : "";
    data.title = !isEmpty(data.title) ? data.title : "";
    data.created_by = !isEmpty(data.created_by) ? data.created_by : "";

    // title checks
    if (Validator.isEmpty(data.title)) {
        errors.title = "Title is a required field";
    }

    // if (Validator.isEmpty(data.course_id)) {
    //     errors.course_id = "Course ID is a required field"
    // }

    // if (Validator.isEmpty(data.created_by)) {
    //     errors.created_by = "Course creator is a required field"
    // }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};