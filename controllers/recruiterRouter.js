const router = require('express').Router()
const Posting = require('../models/jobPosting')
const { findByIdAndUpdate } = require('../models/userApplication')
const Application = require('../models/userApplication')


// Index for Users
router.get("/", async (request, response) => {
    try {
        response.json(await Application.find({}))
    } catch (error){
        response.status(400).json(error)
    }
})

// New for Users - Frontend Only

// Delete for Users
router.delete("/:id", async (request, response) => {
    try {
        response.json(await Posting.findByIdAndDelete(request.params.id))
    } catch(error) {
        response.status(400).json(error)
    }
})

// Update for Users
router.put("/:id", async (request, response) => {
    try {
        response.json(await Posting.findByIdAndUpdate(request.params.id, request.body, {new: true}))
    } catch (error) {
        response.status(404).json(error)
    }
})

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

router.get("/:id", async (request, response) => {
    try {
        response.json(await Application.findById(request.params.id))
    } catch (error) {
        response.status(400).json(error)
    }
})


module.exports = router