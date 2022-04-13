const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CourseSchema = new Schema({
    created_at: {
        type: String,
        default: Date.now
    },
    course_id: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: true
    },
    created_by: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        default: "",
        required: true
    },
    rating: {
        type: Number,
        required: false
    }
});
module.exports = User = mongoose.model("courses", CourseSchema);