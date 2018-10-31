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
    },
    // update: (req, res) => {
    //     Restaurant.findByIdAndUpdate(req.params.id, req.body)
    //     .then((updatedExploration) => {
    //         res.redirect(`/explorations/${updatedExploration._id}`)
    //     })
    //     .then (res.send('New Exploration Added !'))
    // },
    delete: (req, res) => {
        Restaurant.findByIdAndRemove(req.params.id).then(() => {
                res.redirect('/explorations')
            })
        }
    }





module.exports = explore

