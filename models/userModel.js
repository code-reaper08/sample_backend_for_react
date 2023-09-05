const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter your username"],
    },
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email address"],
    },
  },
  {
    timestamps: true,
  }
);

const userSchema = mongoose.model("schema", schema);
module.exports = userSchema;
