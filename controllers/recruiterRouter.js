const router = require('express').Router()
const Posting = require('../models/jobPosting')



// Index for Users

router.get("/", (request, response) => {
    response.send("You have reached the recruiter router")
})

// New for Users - Frontend Only

// Delete for Users

// Update for Users

// Create for Users

router.post("/", async (request, response) => {
    try {
        const newPost = await Posting.create(request.body)
        response.json(newPost)

    }catch (error) {
        response.status(400).json(error) 
    }
})

// Edit for Users - Frontend Only

// Show for Users


module.exports = router