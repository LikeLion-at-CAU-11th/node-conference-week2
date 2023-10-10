const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  todo: {
    type: String,
    rerquired: true
  },
  date: {
    type: Date,
    required: true
  },
  rank: {
    type: Number,
    required: true
  },
});

module.exports = mongoose.model('Todo', todoSchema, 'todos');