const router = require('express').Router()
const Posting = require('../models/jobPosting')
const Application = require('../models/userApplication')

// Index for Users
 
router.get("/", async (request, response) => {
    try {
        response.json(await Posting.find({})) // List of job postings for Users to see on job board
     } catch(error) {
        response.status(400).json(error)
    }
})

// New for Users - Frontend Only

// Delete for Users
router.delete("/id", async (request, response) => {
    try {
        const deletedApp = await Application.findByIdAndDelete(request.params.id)
        response.json(deletedApp)
    } catch (error) {
        response.status(400).json(error)
    }
})

// Update for Users
router.put("/:id", async (request, response) => {
    try {
        await Application.findByIdAndUpdate(request.params.id, request.body, {new: true})
        response.json(request.body);
    } catch(error) {
        response.status(404).json(error);
    }
})

// Create for Users
router.post("/", async (request, response) => {
    try {
        const newApplication = await Application.create(request.body) // User submitting an application for a job request
        response.json(newApplication);
    } catch(error) {
        response.status(400).json(error)
    }
})

// Edit for Users - Frontend Only

// Show for Users

router.get("/:id", async (request, response) => {
    try {
        const post = await Posting.findById(request.params.id)  // User looking at a specific job posting
        response.json(post)
    } catch(error) {
        response.status(400).json(error)
    }
}) 


module.exports = router;