// USER PROFILE PAGE
const User = ('../models/User')


const foodie = {
    index: (req, res) => {
                res.render('users/index')
    },
    new: (req, res) => {
        res.render('users/new')
    },
    show: (req, res) => {
        User.findbyId(req.params._id).then((user)  => {
            res.render('users/:id', {user: user})
        })
    }
    }
    

    // show: (req, res) => {
    //     User.findById(req.params.id).then((user) => {
    //     res.render(`user/show`, {user: user})
    //     })

//     
//     },
// update: (req, res) => {
//     Users.findByIdAndUpdate(req.params.id, req.body)
//     .then((updateUser) => {
//         res.redirect(`/$updateUser._id`)
//     })
// }

module.exports = foodie