const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema ({
    // username: String,
    // password: String,
    yourlocation: String,
    img: String,
    explorations: {
        name: String,
        location: String,
        contact: Number,
        hours: [{
            friday: String,
            saturday: String,
            sunday: String,
            monday: String,
            tuesday: String,
            wednesday: String,
            thursday: String,
        }],
        website: String,
        description: String,
        img: String,
        img: String,

    }

})

module.exports = mongoose.model('Users', user)