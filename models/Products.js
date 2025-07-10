const mongoose = require("mongoose")



const productSchema = mongoose.Schema({
    file: String,
    title: String,
    price: Number,
    description: String,
    category: String,
})

module.exports = mongoose.model('product', productSchema)
