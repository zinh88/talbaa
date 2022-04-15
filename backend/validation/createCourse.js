const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateCreateCourse(data) {
    let errors = {};

    data.created_at = !isEmpty(data.created_at) ? data.created_at : "";
    data.course_id = !isEmpty(data.course_id) ? data.course_id : "";
    data.description = !isEmpty(data.description) ? data.description : "";
    data.title = !isEmpty(data.title) ? data.title : "";
    data.created_by = !isEmpty(data.created_by) ? data.created_by : "";
    data.tags = !isEmpty(data.tags) ? data.tags : [];
    data.rating = !isEmpty(data.rating) ? data.rating : 0;

    // title checks
    if (Validator.isEmpty(data.title)) {
        errors.title = "Title is a required field";
    }

    let tagsCount = 0;
    data.tags.forEach(element => {
        if (element != "") {
            tagsCount++;
        }
    });
    if (tagsCount < 3) {
        errors.tags = "Not enough tags, enter at least 3 tags";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};