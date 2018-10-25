var express = require('express');
var router = express.Router();

const appControl = require('../controller/application')
const foodie = require('../controller/foodie')




/* GET home page. */
router.get('/', appControl.foodies)
router.get('/users', foodie.index)

module.exports = router;
