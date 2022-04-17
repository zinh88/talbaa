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

    quiz: {
        type: Array,
        required: false
    },

    comments: {
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
});

module.exports = mongoose.model("lectures", LectureSchema);