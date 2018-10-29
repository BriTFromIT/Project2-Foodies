// USER PROFILE PAGE FUNCTIONALITY 


const User = require('../models/User')




const foodie = {
    index: (req, res) => {
        res.render('users/index')
    },
    new: (req, res) => {
        res.render('users/new')
    },
    create: (req, res) => {
        User.create(req.body).then((newUser) => {
            res.redirect(`/users/${newUser._id}`)
        })
    },
    edit: (req, res) => {
        User.findById(req.body).then((User) => {
            res.redirect('/users')
        })
    },
    show: (req, res) => {
        User.findById(req.params.id)
            .then(user => {
                res.render('users/show', { user: user })
            })
    },
    
    
}

// create: (req, res) => {
//     User.create(req.body).then((newUser) => {
//       res.redirect(`/users/${newUser._id}`)
//     })
//   },

// update: (req, res) => {
//     Users.findByIdAndUpdate(req.params.id, req.body)
//     .then((updateUser) => {
//         res.redirect(`/$updateUser._id`)
//     })
// }

module.exports = foodie