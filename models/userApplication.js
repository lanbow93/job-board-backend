const mongoose = require("./connection");

const applicationSchema = new mongoose.Schema({
    name: {type: String, required: true},
    number: String,
    email: {type: String, required: true},
    linkedin: String,
    resume: {type: String, required: true},
    postID: {type: String, required: true} 
},{timestamps: true});

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;