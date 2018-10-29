
// USER PROFILE PAGE DATA

const mongoose = require('../db/connection')
const Schema = mongoose.Schema


const User = new Schema ({
    info: [{
        name: String,
        username: String,
        password: String,
        yourlocation: String,
        img: String,
    }]
})

module.exports = mongoose.model('Users', User)