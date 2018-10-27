const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema ({
    name: String,
    username: String,
    password: String,
    yourlocation: String,
    img: String,
    slogan: String,
})

module.exports = mongoose.model('User', User)