const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ContentSchema = new Schema ({
    title: {
        type: String,
        required: false,
        default: ""
    },

    cld_reference: {
        type: String,
        required: true,
        default: ""
    },

    filetype: {
        type: String,
        required: true,
        default: ""
    }
})

module.exports = mongoose.model("content", ContentSchema)