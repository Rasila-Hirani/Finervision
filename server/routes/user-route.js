// Import express
const express = require('express')

// Import users-controller
const userRoutes = require('./../controllers/user-controller.js')

// Create router
const router = express.Router()

// Add route for GET request to retrieve all user
// In server.js, users route is specified as '/users'
// this means that '/all' translates to '/users/all'
router.get('/all', userRoutes.usersAll)

// Add route for POST request to create new user
// In server.js, users route is specified as '/users'
// this means that '/create' translates to '/users/create'
router.post('/create', userRoutes.usersCreate)



// Export router
module.exports = router