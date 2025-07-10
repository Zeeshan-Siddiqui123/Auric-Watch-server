// models/Order.js
const mongoose = require("mongoose")




const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      title: String,
      quantity: Number,
      price: Number,
    }
  ],
  totalAmount: Number,
  paymentMethod: String, // 'COD' or 'Online'
  transactionId: String, // If using online gateway
  status: {
    type: String,
    default: 'Pending', // 'Pending', 'Processing', 'Delivered', 'Cancelled'
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Order', orderSchema)
