const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  category: {
    type: String,
  },
  email: {
    type: String,
  },
  contact: {
    type: String,
  },
});

const User = new mongoose.model("User", userSchema);

module.exports = User;
