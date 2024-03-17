const express = require("express");


const {registerUser,loginUser} = require("../controllers/studentController");
const {sendOTP}=require("../Controllers/OTPController")
const {resetPasswordToken,resetPassword}=require('../Controllers/resetPassword')
const {createClass,showAllClasses,getClassDetails} = require("../Controllers/classRoomController");
const { getTopics } = require("../controllers/subjectController");
const router=express.Router();



router.route("/update-password").post(resetPasswordToken)
router.route("/register").post(registerUser);
router.route("/verification").post(sendOTP);
router.route("/login").post(loginUser);
router.route("/change-password").post(resetPassword);
router.post("/gettopics",getTopics)

// Get Details for a Specific Courses
//router.post("/getCourseDetails", getCourseDetails)



module.exports=router;