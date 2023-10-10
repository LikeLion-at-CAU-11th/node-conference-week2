const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const memberSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  part: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Member", memberSchema, "members");
