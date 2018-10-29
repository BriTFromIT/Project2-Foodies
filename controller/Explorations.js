// EXPLORATIONS / RESTAURANTS VISITED PAGE
const explore = require('../models/Restaurant')
const review = require('../models/Reviews')

let wander = {
    index: (req, res) => {
        res.render('explorations/');
    },
    new: (req, res) => {
        res.render('explorations/:id'); {
        res.send('Hello from new exploration! ')
        }
      },
    show: (req, res) => {

    }
}



module.exports = wander