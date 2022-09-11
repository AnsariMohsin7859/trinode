const express = require('express')
const router = express.Router()

//import all controller of Campus
const {getAllCampus , getCampusById , createCampus , updateCampus , deleteCampus } = require('../conrollers/campus.controller')

//get all Campus 
router.get('/getAllCampus' , getAllCampus)

//get single Campus by id 
router.get('/getCampusById/:id' , getCampusById)

//create new Campus 
router.post('/createCampus' , createCampus)

//update existing Campus
router.put('/updateCampus/:id' , updateCampus)

//delete an Campus 
router.delete('/deleteCampus/:id' , deleteCampus)

//export route of Campus
module.exports = router
