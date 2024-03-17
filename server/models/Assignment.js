
const mongoose = require('mongoose');
const { Question } = require('./Question');

const assignmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  questions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: Question
  }]
});

const Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = { Assignment, assignmentSchema };

// const mongoose = require("mongoose");

// const assignmentSchema = new mongoose.Schema({
//     Name: {
//         type:String,
//         required:true
//     },
//     Description: {
//         type:String,
//     },
//    Document:{

//         type:String

//     },
//       startDate: {
//         type: Date,
//         default: Date.now,
//       },
//       dueDate: {
//         type: Date,
//         required: true,
//       }

// },
// {
//     timestamps:true,
// });

// module.exports = mongoose.model("Assignment", assignmentSchema);

