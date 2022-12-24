const mongoose = require("mongoose");

const checkSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    userId: { type: String, required: true }
  }
);

module.exports = mongoose.model("Check", checkSchema);