const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TagsSchema = new Schema({
    name: {
        type: String,
        required : true
    }
});
module.exports = User = mongoose.model("tags", TagsSchema);