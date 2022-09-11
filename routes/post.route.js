const express = require('express')
const router = express.Router()

//import all controller
const {getAllPost , getPostById , createPost , updatePost , deletePost} = require('../conrollers/post.controller')

//get all user 
router.get('/getAllPost' , getAllPost)

//get single user by id 
router.get('/getPostById/:id' , getPostById)

//create new user 
router.post('/createPost' , createPost)

//update existing user
router.put('/updatePost/:id' , updatePost)

//delete an user 
router.delete('/updatePost/:id' , deletePost)

module.exports = router
