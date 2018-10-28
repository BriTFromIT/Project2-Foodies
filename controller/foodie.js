// USER PROFILE PAGE

const foodie = {
    index: (req, res) => {
        User.find({}).populate('explorations')
        .then((users) => {
          res.render('users/index', {
              users: users
          })  
        })
    },

    new: (req,res) => {
        res.send('WE LIT!')
    },
    show: (req,res) => {
        const userId = req.params.usersId
        User.findById(userId).populate('explorations')
        .then(user => {
            res.render('users/show', {users: user})
        })
    }
},
edit: (req,res) => {
    res.send('')
}


module.exports = foodie