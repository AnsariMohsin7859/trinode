const express = require('express')
const pool = require('./config/db.config')
//import enviorment variables like PORT 
require('dotenv').config()

const app = express()
app.use(express.json())

//call db connection 
pool.connect()

//require all routes 
const routes = require ('./routes/index')

//all routes 
app.use('/v1',routes)

//for checking connection of db and server
app.get('/get',(req,res)=>{
    return res.send('api is working')
})

//server 
const PORT = process.env.PORT || 3001
app.listen(PORT , ()=>{
    console.log("server connected on "+ PORT);
})








