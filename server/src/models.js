const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  work: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  priority: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("ToDoList", todoSchema, "todos");
