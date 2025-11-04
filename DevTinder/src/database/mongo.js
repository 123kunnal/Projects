const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect("mongodb://127.0.0.1:27017/yourdbname") // ✅ Add your DB URL

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true
  },
  lastname: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email not valid");
      }
    }
  },
  password: {
    type: String,
    required: true
    // ❗ DO NOT validate strong password here
  },
  age: {
    type: Number,
    required: true
  }
});

// ✅ Correct model creation
const User = mongoose.model("User", userSchema);

module.exports = User;
