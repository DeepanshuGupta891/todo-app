const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  status: {
    type: String,
    enum: ["pending", "in progress", "completed"],
    default: "pending"
  },
  user: String,
}, { timestamps: true });

module.exports = mongoose.model("Task", taskSchema);
