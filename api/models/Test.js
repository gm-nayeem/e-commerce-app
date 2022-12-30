const mongoose = require("mongoose");

const testSchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    userId: { type: String, required: true }
  }
);

module.exports = mongoose.model("Test", testSchema);