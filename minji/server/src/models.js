const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoSchma = new Schema({
    content: {
        type: String,
        required: true,
    },
    deadLine: {
        type: Date,
        required: true,
    },
    priority: {
        type: Number,
        required: true,
    },
})

module.exports = mongoose.model('Todo',todoSchma, 'todos')