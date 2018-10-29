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
        console.log("user created")
        console.log(req.body)
        User.create(req.body).then((newUser) => {
            console.log("NEW USER", newUser)
            newUser.save()
            res.redirect(`/users/${newUser._id}`)
        })
    },
    edit: (req, res) => {
        User.findById(req.body).then((User) => {
            res.redirect('/users/show')
        })
    },
    show: (req, res) => {
        User.findById(req.params.id)
            .then(user => {
                res.render('users/show', { user: user })
            })
    }
}



module.exports = foodie