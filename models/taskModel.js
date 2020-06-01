const mongoose = require("mongoose");

const { Schema } = mongoose;

const userModel = new Schema(
  {
    task: { type: String },
    // date: { type: String },
    // password: { type: String },
    delete: { type: Boolean, default: false },
    owner: [{
      type: Schema.Types.ObjectId,
      ref: "User"
    }]
  }
);

module.exports = mongoose.model("Task", userModel);