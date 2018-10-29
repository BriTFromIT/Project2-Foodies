// EXPLORATIONS / RESTAURANTS VISITED PAGE
// const explore = require('../models/Restaurant')
const Restaurant = require('../models/Restaurant');
const review = require('../models/Reviews');

let explore = {
    index: ((req, res) => {
        res.render('explorations');
    }),
    new: (req, res) => {
        res.render('explorations/new')
      },
    show: (req, res) => {
        Restaurant.findById(req.params.id)
        .then(restaurant => {
            res.render('explorations/show', {restaurant: restaurant})
        })
    },
        create: (req, res) => {
            console.log("user created")
            console.log(req.body)
            Restaurant.create(req.body).then((newRestaurant) => {
                console.log("NEW RESTAURANT", newRestaurant)
                newRestaurant.save()
                res.redirect(`/explorations/${newRestaurant._id}`)
            })
        },
    }




module.exports = explore


// const User = require('../models/User')
// const Event = require('../models/Event')

// const eventsController = {
//    index: (req, res) => {
//        Event.find({}).populate('events')
//        .then((events) => {
//            res.render('events/index', {
//                events: events
//            })
//        })
//    },

//    new: (req, res) =>{
//        res.render('events/new')

//      },


//    create: (req, res) => {
//        Event.create(req.body).then((newEvent) => {
//          res.redirect(`/events/${newEvent._id}`)
//        })
//      },


//      edit: (req, res) => {
//        Event.findById(req.params.id).then(event => {
//          res.render('events/edit', { event: event })
//        })
//      },

//      update: (req, res) => {
//        Event.findByIdAndUpdate(req.params.id, req.body).then((updatedEvent) => {
//          res.redirect(`/events/${updatedEvent._id}`)
//        })
//      },

//      delete: (req, res) => {
//        Event.findByIdAndRemove(req.params.id).then(() => {
//          res.redirect('/')
//        })
//      }

// }

// module.exports = eventsController
// Jump
// Message Input

// Message @Rashaunda Guy-Callum