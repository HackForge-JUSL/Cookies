const mongoose = require("mongoose");
const { questionSchema } = require("./Question");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  accountType: {
    type: String,
    enum: ["Admin", "Student", "Instructor"],
    required: true,
  },

  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Classroom",
    },
  ],
  image: {
    type: String,
  },
  token: {
    type: String,
  },
  
  resetPasswordExpires: {
    type: Date,
  },
  courseProgress: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CourseProgress",
    },
  ],
  performance: [
    {
      solvedQuestion: [
        {
          questionId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Question",
          },
          attemptStatus: {
            type: String,
            enum: ["Correct", "Incorrect"],
            required: true,
          },
          frequency: {
            type: Number,
            required: true,
            default: 0,
          },
        },
      ],
      attendance: [
        {
          type: Number,
        },
      ],
    },
  ],
});
module.exports = mongoose.model("User", userSchema);
