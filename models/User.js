const mongoose = require("mongoose")



const userSchema = mongoose.Schema({
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
  ]
})

module.exports = mongoose.model('user', userSchema)
