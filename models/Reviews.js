const mongoose = require('../db/connection')
const Schema = mongoose.Schema


// Reviews will be the dish

const Reviews = new Schema ({
    name: String,
    img: String,
    price: String,
    review: String,
    rating: String,

})

module.exports = mongoose.model('Reviews', Reviews)