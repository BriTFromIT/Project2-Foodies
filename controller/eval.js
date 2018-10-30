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
        cont 
        Reviews.findById(req.params.reviews._Id)
        .then(review => {
            res.render('evaluation/show' , { review: review });
        })

        // show: (req, res) =>{
        //     const storeId = req.params.storesId
        //     Store.findById(storeId).populate('products')
        //     .then(store => {
        //         res.render('stores/show', {store: store})
        //     })
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