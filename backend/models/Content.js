const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ContentSchema = new Schema ({
    title: {
        type: String,
        required: false,
        default: "Content-default name"
    },

    cld_reference: {
        type: String,
        required: true,
        default: ""
    },

    // types for this will be pdf, text, image, video
    filetype: { 
        type: String,
        required: true,
        default: ""
    }
})

module.exports = mongoose.model("content", ContentSchema)