const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CourseSchema = new Schema({
    created_at: {
        type: String,
        default: Date.now
    },
    // course_id: {
    //     type: String,
    //     required: true
    // },
    num_enrollments: {
        type: Number,
        default: 0
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
        default: [],
        required: true
    },
    rating: {
        type: Number,
        required: false
    },
    lectures: {
        type: Array,
        required: false
    }
});



module.exports = mongoose.model("courses", CourseSchema);