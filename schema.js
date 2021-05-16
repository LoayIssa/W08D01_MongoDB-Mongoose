const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
    task: { type: String, required: true },
    description: { type: String },
    deadline: { type: String },
    isCompleted: { type: Boolean },
    priority: { type: String },
  });

  module.exports = mongoose.model("todo ",todoSchema)