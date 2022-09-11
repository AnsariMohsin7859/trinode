const express = require('express')
const router = express.Router()

//import all controller of event
const {getAllEvent , getEventById , createEvent , updateEvent , deleteEvent} = require('../conrollers/event.controller')

//get all event 
router.get('/getAllEvent' , getAllEvent)

//get single event by id 
router.get('/getEventById/:id' , getEventById)

//create new event 
router.post('/createEvent' , createEvent)

//update existing event
router.put('/updateEvent/:id' , updateEvent)

//delete an event 
router.delete('/deleteEvent/:id' , deleteEvent)

//export route of event
module.exports = router
