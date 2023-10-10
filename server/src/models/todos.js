const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  priority: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Todo", todoSchema, "todos");
