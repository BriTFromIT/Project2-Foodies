// USER PROFILE PAGE

const foodie = {
    index: (req, res) => {
        User.find({}).populate('')
        res.render('users/index');
    }
}



module.exports = foodie