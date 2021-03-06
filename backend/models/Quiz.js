const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
  title: {
    type: String,
    required: true,
    default: "Quiz",
  },

  description: {
    type: String,
    required: false,
    default: ""
  },

  questions: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("quiz", QuizSchema);
