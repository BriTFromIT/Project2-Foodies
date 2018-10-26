const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Restaurants = new Schema ({
    name: String,
    slogan: String,
    img: String,
    explorations: String,

})

module.exports = mongoose.model('Restaurants', Restaurants)