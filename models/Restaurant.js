const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Restaurant = new Schema({

    name: String,
    location: String,
    contact: Number,
    // hours: [{
    //     friday: String,
    //     saturday: String,
    //     sunday: String,
    //     monday: String,
    //     tuesday: String,
    //     wednesday: String,
    //     thursday: String,
    // }],
    website: String,
    description: String,
    img: String,
    img: String,
    reviews: [{
        type: Schema.Types.ObjectId, //class that is definied
        ref: 'Reviews' //what is being defined, knows because of module.exports
    }]
})

module.exports = mongoose.model('Restaurant', Restaurant)