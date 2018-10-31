// EXPLORATIONS / RESTAURANTS VISITED PAGE
// const explore = require('../models/Restaurant')
const Restaurant = require('../models/Restaurant');
const Reviews = require('../models/Reviews');


let explore = {
    index: ((req, res) => {
        Restaurant.find().then(restaurants => {
            res.render('explorations/index', {restaurants: restaurants});
        })
    }),
    new: (req, res) => {
        res.render('explorations/new')
    },
    create: (req, res) => {
        console.log("Restaurant created")
        console.log(req.body)
        Restaurant.create(req.body).then((newRestaurant) => {
            console.log("NEW RESTAURANT", newRestaurant)
            newRestaurant.save()
            res.redirect(`/explorations/${newRestaurant._id}`)
        })
    },
    edit: (req, res) => {
        Restaurant.findbyId(req.body).then((Restaurant) => {
            res.redirect('/explorations/show')
        })
    },




    // edit: (req, res) => { //what the route will look for
    //     User.findById(req.body).then((User) => {
    //         res.redirect('/users/show')
    //     })
    show: (req, res) => {
        const restaurantId = req.params.restaurantId
        console.log(restaurantId)
        Restaurant.findById(restaurantId).populate('reviews').then((reviews) => {
            res.render('explorations/show', {
                restaurant: restaurant
            })
        })
        Restaurant.findById(req.params.id).populate('reviews')
            .then(restaurant => {
                res.render('explorations/show', { restaurant: restaurant })
            })

            // show: (req, res) =>{
            //     const storeId = req.params.storesId
            //     Store.findById(storeId).populate('products')
            //     .then(store => {
            //         res.render('stores/show', {store: store})
            //     })
    },
    update: (req, res) => {
        Restaurant.findByIdAndUpdate(req.params.id, req.body)
        .then((updatedExploration) => {
            res.redirect(`/explorations/${updatedExploration._id}`)
        })
        .then (res.send('New Exploration Added !'))
    },
    delete: (req, res) => {
        Reviews.findByIdAndRemove(req.params.id).then(() => {
                res.redirect('/explorations/')
            })
        }
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
