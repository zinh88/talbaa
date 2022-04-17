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
        required: false,
        default: 5
    },

    pic: {
        type: String,
        required: false,
        default: "https://res.cloudinary.com/dv5ig0sry/image/upload/v1650225490/photo-1519389950473-47ba0277781c_qd5ucq.jpg"
    },

    lectures: {
        type: Array,
        default: [],
        required: true
    }
});

module.exports = mongoose.model("courses", CourseSchema);