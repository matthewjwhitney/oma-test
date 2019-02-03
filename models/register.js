const mongoose = require("mongoose");
const RegisterSchema = new mongoose.Schema({
  fullName: {
    type: String,
    default: ""
  },
  email: {
    type: String,
    default: ""
  },
  subscribe: {
    type: String,
    default: ""
  }
});

module.exports = mongoose.model("Register", RegisterSchema);
