const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    enrolledCourses: {
        type: Array,
        required: false,
        default: []
    },
    createdCourses: {
        type: Array,
        required: false,
        default: []
    }
});
module.exports = User = mongoose.model("users", UserSchema);