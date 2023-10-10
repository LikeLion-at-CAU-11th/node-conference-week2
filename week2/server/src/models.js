const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const todosSchema = new Schema({
    todos:{
        type:String,
        required: true
    },
    dueDate:{
        type:Date,
        required: true
    },
    priority:{
        type:Number,
        required: true
    }
});
module.exports = mongoose.model("Todos", todosSchema, "members");