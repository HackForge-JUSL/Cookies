const mongoose = require('mongoose');
const { questionSchema } = require('./Question');
const { assignmentSchema } = require('./Assignment');
const { quizSchema } = require('./Quiz');

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  topics:{
    type:Array,
    required:true
  },
  
  assignments: [assignmentSchema],
  quizzes: [quizSchema]
});

const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;
