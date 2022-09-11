const express = require('express')
const router = express.Router()

//import all controller
const {getAllUser , getUserById , createUser , updateUser , deleteUser} = require('../conrollers/users.controller')

//get all user 
router.get('/getAllUser' , getAllUser)

//get single user by id 
router.get('/getUserById/:id' , getUserById)

//create new user 
router.post('/createUser' , createUser)

//update existing user
router.put('/updateUser/:id' , updateUser)

//delete an user 
router.delete('/updateUser/:id' , deleteUser)


//export route of user
module.exports = router
