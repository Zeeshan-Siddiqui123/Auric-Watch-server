const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  file: {
    type: String,
    default: 'default.png'
  },
  cart: [
    {
      id: String,
      title: String,
      price: Number,
      quantity: Number,
      file: String,
    }
  ],
  otp: {
    type: String,
    default: null
  },
  otpExpires: {
    type: Date,
    default: null
  },
  isVerified: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('user', userSchema);
