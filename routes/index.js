var express = require('express');
var router = express.Router();

const appControl = require('../controller/application')
const foodie = require('../controller/foodie')
const eval = require('../controller/eval')




/* GET home page. */
router.get('/', appControl.foodies)
router.get('/users', foodie.index)
router.get('/evaluation', eval.index)

module.exports = router;
