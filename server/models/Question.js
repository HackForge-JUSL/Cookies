const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    trim: true,
  },
  subject: {
    type: Array,
    required: true,
    trim: true,
  },
  topicTag: {
    type: Array,
    required: true,
    trim: true,
  },

  ans: {
    type: String,
    required: true,
    trim: true,
  },
  optionA: {
    type: String,
    required: true,
    trim: true,
  },
  optionB: {
    type: String,
    required: true,
    trim: true,
  },
  optionC: {
    type: String,
    required: true,
    trim: true,
  },
  optionD: {
    type: String,
    required: true,
    trim: true,
  },
  correctOption: {
    type: String,
    enum: ["a", "b", "c", "d"],
    required: true,
  },
});

const Question = mongoose.model("Question", questionSchema);

module.exports = { questionSchema, Question };
