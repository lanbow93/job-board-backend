// Imports
require('dotenv').config()
const express = require('express');
const cors = require('cors')
const recruiterRouter = require('./controllers/recruiterRouter.js')
const userRouter = require('./controllers/userRouter.js')

// Application object
const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use("/recruit", recruiterRouter)
app.use("/user", userRouter)

// Routes

app.get("/", (request, response) => {
    response.send("Server is functional")
})


// Listener
const PORT = process.env.PORT
app.listen(PORT, (request, response) => {
    console.log(`Listening on port: ${PORT}`)
})

