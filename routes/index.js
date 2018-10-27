// DATABASE CONTROLLERS : 

var express = require('express');
var router = express.Router();

const appControl = require('../controller/application')
const foodie = require('../controller/foodie')
const eval = require('../controller/eval')


// -----_-_-____-___-_-_-----_-_____---______------_

/* GET home page. */
router.get('/', appControl.foodies)


// -----_-_-____-___-_-_-----_-_____---______------_


// Creating routes/functions for user controller

// main user controller:
router.get('/users', foodie.index) //GET user's profile page 

// routes for getting into main user controller:
router.get('/users/new', foodie.new) //GET - navigates to new user page
router.get('/users/:id', foodie.show) // GET - showing new user page
router.post('/users', foodie.create) // POST - creating the user profile

// -----_-_-____-___-_-_-----_-_____---______------_

router.get('/evaluation', eval.index)

module.exports = router;
