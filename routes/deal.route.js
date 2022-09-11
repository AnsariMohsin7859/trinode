const express = require('express')
const router = express.Router()

//import all controller of deal
const {getAllDeal , getDealById , createDeal , updateDeal , deleteDeal} = require('../conrollers/deal.controller')

//get all deal 
router.get('/getAllDeal' , getAllDeal)

//get single deal by id 
router.get('/getDealById/:id' , getDealById)

//create new deal 
router.post('/createDeal' , createDeal)

//update existing deal
router.put('/updateDeal/:id' , updateDeal)

//delete an deal 
router.delete('/deleteDeal/:id' , deleteDeal)

//export route of deal
module.exports = router
