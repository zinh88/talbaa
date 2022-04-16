const mongoose = require("mongoose")
const Schema = mongoose.Schema

const LectureSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    content: {
        type: Array,
        required: false
    },

    videoCount: {
        type: Number,
        default: 0
    },

    notesCount: {
        type: Number,
        default: 0
    },

    quizCount: {
        type: Number,
        default: 0
    }
    
    // not sure if I should keep courses here or if I should keep lecture reference in course
    // course: {
    //     type: String,
    //     required: true
    // }
});

module.exports = mongoose.model("lectures", LectureSchema);