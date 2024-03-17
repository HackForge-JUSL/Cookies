// Import the required modules
const express = require("express")
const router = express.Router()

 const upload=require('../middleware/multerMiddlware')
// Import the Controllers

// Classroom Controllers Import
const {
  createClass,
  addStudent,
  showAllClasses,
  getClassDetails
} = require("../Controllers/classRoomController")

const {createAssignment}=require('../Controllers/assignmentController');


// Importing Middlewares
const { auth, isTeacher, isStudent, isAdmin } = require("../middleware/authMiddleware");
const { createQuestion } = require("../controllers/questioncontroller.");
const { createSubject } = require("../controllers/subjectController");



// Courses can Only be Created by Instructors
router.post("/createClass", auth, isTeacher, createClass)
router.post("/create-assignment",auth,isTeacher,upload.single('file'),createAssignment)
router.post("/addStudent",auth,isTeacher,addStudent);
router.post("/create-question",auth,isTeacher,createQuestion)
router.post("/add-subject",createSubject)





module.exports = router