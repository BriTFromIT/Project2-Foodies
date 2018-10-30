// REVIEWS PAGE

const Reviews = require('../models/Reviews');

const eval = {
    index: ((req, res) => {
        Reviews.find({}).then(reviews => {
            res.render('evaluation/index', { reviews: reviews});
        })
    }),
    new: (req, res) => {
        res.render('evaluation/new')
    },
    create: (req, res) => {
        console.log("review created!")
        Reviews.create(req.body).then((newReview) => {
            newReview.save()
            res.redirect(`/evaluation/${newReview.id}`)
        })
    },
    show: (req, res) => {
        Reviews.findById(req.params.id)
        .then(reviews => {
            res.render('evaluation/show' , { reviews: reviews });
        })
    },
    delete: (req, res) => {
        Reviews.findByIdAndRemove(req.params.id)
        .then (() => {
            res.redirect('/evaluation/show')
        })
    },
    update: (req, res) => {
        res.send('Review Deleted! ')
    }
}
    



module.exports = eval