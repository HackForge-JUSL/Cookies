const mongoose = require('mongoose');
const { Question } = require('./Question');

const quizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  questions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: Question
    }
  ],
  timeLimit: {
    type: Number,
    default: 30,
  },
  scores: {
    type: Number,
    default: -1,
  },
  difficulty: {
    type: String,
    default: "Medium",
  }
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = { Quiz, quizSchema }
