const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Restaurants = new Schema ({
    name: String,
    location: String,
    img: String,
    hours: String,
    rating: String,

})

module.exports = mongoose.model('Restaurants', Restaurants)