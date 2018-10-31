// USER PROFILE PAGE FUNCTIONALITY 
const User = require('../models/User')


const foodie = { // Setting the variabe used to connect to routers
    index: (req, res) => { //what the route will look for
        res.render('users/index')
    },
    new: (req, res) => { //what the route will look for
        res.render('users/new')
    },
    create: (req, res) => { //what the route will look for
        console.log("user created") //telling the server to respond with "user created"
        console.log(req.body) //telling the server to 
        User.create(req.body).then((newUser) => {
            console.log("NEW USER", newUser)
            newUser.save()
            res.redirect(`/users/${newUser._id}`)
        })
    },
    edit: (req, res) => { //what the route will look for
        User.findById(req.params.usersId).then((banana) => {
            res.redirect('users/edit', {
                banana: banana
            })
        })

        // edit: (req, res) => {
        //     Movie.findById(req.params.movieId).then(movie => {
        //         res.render(‘movies/edit’, {movie: movie})
        //     })
        // },
    },
    update: (req, res) => {
        User.findByIdAndUpdate(req.params.usersId, req.body).then((updatedUser) => {
            res.redirect(`/users/${updatedUser._id}`)
        })
    },

    show: (req, res) => { //what the route will look for
        User.findById(req.params.id)
            .then(user => {
                res.render('users/show', { user: user })
            })
    },

}



module.exports = foodie // will be use to represent the user's directions and information