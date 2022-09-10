const express = require('express')
const router = express.Router()

//get all routes
const userRoute = require('./users.route')

router.use('/user' , userRoute)


module.exports = router

