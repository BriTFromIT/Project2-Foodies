const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Restaurants = new Schema ({
    username: String,
    password: String,
    yourlocation: String,
    img: String,
    explorations: String,

})

module.exports = mongoose.model('Restaurants', Restaurants)