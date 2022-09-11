const express = require("express");
const router = express.Router();


//get all routes
//import users route
const userRoute = require("./users.route");

//import post route
const postRoute = require("./post.route");

//import event route
const eventRoute = require("./event.route");

//import deal route
const dealRoute = require("./deal.route");

//import college route
const collegeRoute = require("./college.route");

//import campus route
const campusRoute = require("./campus.route");


//use all route
//route of users
router.use("/user", userRoute);

//route of posts
router.use("/post", postRoute);

//route of events
router.use("/event", eventRoute);

//route of deal
router.use("/deal", dealRoute);

//route of college
router.use("/college", collegeRoute);

//route of campus
router.use("/campus", campusRoute);

module.exports = router;
