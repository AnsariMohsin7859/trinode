const express = require('express')
const router = express.Router()

//import all controller of college
const {getAllCollege , getCollegeById , createCollege , updateCollege , deleteCollege} = require('../conrollers/college.controller')

//get all college 
router.get('/getAllCollege' , getAllCollege)

//get single college by id 
router.get('/getCollegeById/:id' , getCollegeById)

//create new college 
router.post('/createCollege' , createCollege)

//update existing college
router.put('/updateCollege/:id' , updateCollege)

//delete an college 
router.delete('/deleteCollege/:id' , deleteCollege)

//export route of college
module.exports = router
