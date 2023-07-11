const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },

  gender: {
    type: String,
    required: true,
  },

  mark1: {
    type: Number,
    required: false
  },
  mark2: {
    type: Number,
    required: false
  },
  mark3: {
    type: Number,
    required: false
  },
  grade: {
    type: String,
    required: false,
  },
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
