const mongoose = require("mongoose");

const { Schema } = mongoose;

const userModel = new Schema(
  {
    userId: { type: String },
    password: { type: String },
    delete: { type: Boolean, default: false },
    tasks: [{
      task: {type:String},
      delete: { type: Boolean, default: false }

    }]
  }
);

module.exports = mongoose.model("User", userModel);