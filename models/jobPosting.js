const mongoose = require('./connection.js');

const postingSchema = new mongoose.Schema({
    title: {type: String, required: true},
    companyName: {type: String, required: true},
    address: String,
    salary: String,
    jobType: String,
    shift: String,
    qualifications: {type: Array, required: true},
    benefits: Array,
    description: String,
    isFilled: Boolean
}, {timestamps: true});

const Posting = mongoose.model("Posting", postingSchema);

module.exports = Posting;

