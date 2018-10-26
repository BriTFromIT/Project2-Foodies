const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Users = new Schema ({
    // username: String,
    // password: String,
    yourlocation: String,
    img: String,
})

module.exports = mongoose.model('Users', Users)