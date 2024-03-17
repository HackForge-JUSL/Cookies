const mongoose = require('mongoose');
const Subject = require('./Subject');

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  subjects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: Subject
  }]
});

const Course = mongoose.model('Course', courseSchema);

module.exports = { Course };
