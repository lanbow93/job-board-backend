// Imports
require('dotenv').config()
const MONGODB_URL = process.env.MONGODB_URL
const mongoose = require("mongoose");

// Allowing information not in schema to be sent
mongoose.set("strictQuery", false);
// Establishing a connection to database 
mongoose.connect(MONGODB_URL)

// Setting up connection events 
mongoose.connection
    .on("open", () => {console.log("Mongo server is connected")})
    .on("close", () => {console.log("Mongo server has disconnected")})
    .on("error", (error) => {console.log(error)})

// Exporting mongoose
    
module.exports = mongoose;

