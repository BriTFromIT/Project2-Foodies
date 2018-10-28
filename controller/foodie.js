// USER PROFILE PAGE
const User = ('../models/User')
const Restaurant = ('../models/Restaurant')


const foodie = {
    index: (req, res) => {
                res.render('users/index')
    },

    new: (req, res) => {
        res.render('users/new')
        // .then({
        //     show: (req, res) => {
        //         res.render('users/show', { users: user })
        //     }
        // })
    },
    create: (req, res) => {
        User.create(req.body).then(newUser => {
            res.redirect(`/${newUser._id}`)
        })
    },
    show: (req, res) => {
        const userId = req.params.usersId
        User.find(userId).populate('User')
        .then(user => {
            res.render('../users/:id')
        })
    },
    edit: (req, res) => {
        User.findById(req.params.id)
            .then(user => {
                res.render('users/edit', { user: user })
            })
            }
        }
    

//     
//     },
// update: (req, res) => {
//     Users.findByIdAndUpdate(req.params.id, req.body)
//     .then((updateUser) => {
//         res.redirect(`/$updateUser._id`)
//     })
// }

module.exports = foodie