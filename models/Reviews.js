const mongoose = require('../db/connection')
const Schema = mongoose.Schema


// Reviews will be the dish

const Reviews = new Schema({
    name: String,
    img: String,
    price: String,
    yelpreview: String,
    myrating: String,

})

module.exports = mongoose.model('Reviews', Reviews)