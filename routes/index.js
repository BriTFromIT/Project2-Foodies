// DATABASE CONNECTIONS : 

var express = require('express');
var router = express.Router();

// CONTROLLER CONNECTIONS: 
const appControl = require('../controller/application')
const foodie = require('../controller/foodie') // foodie.js || Users profile page
const explore = require('../controller/explorations') // explorations.js || explorations / restaurants
const eval = require('../controller/eval') // eval.js || Reviews 


// Create route index for Application.js controller:
router.get('/', appControl.foodies) // GET home page 

// -----_-_-____-___-_-_-----_-_____---______------_
// -----_-_-____-___-_-_-----_-_____---______------_


// Create route index for User profile:
router.get('/users', foodie.index) //GET user's profile page || shows User Profile

// Create routes for navigating User profile:
// router.get('/users/new', foodie.new) //GET - navigates to new user page 
router.get('/users/:id', foodie.show) // GET - shows new user page
router.post('/users/:id/edit', foodie.edit) // GET -  Rendering the form to update user profile
router.patch('/users/:id', foodie.update) // PATCH - update user profile

// -----_-_-____-___-_-_-----_-_____---______------_
// -----_-_-____-___-_-_-----_-_____---______------_
// -----_-_-____-___-_-_-----_-_____---______------_

// Create route index for  Explorations / Restaurants:
router.get('/explorations', explore.index) // GET user's explorations &&|| shows Restaurants


// Create routes for navigating Explorations / Restaurants: 
router.get('explorations/index', explor.new) // GET - navigates to explorations page
router.get('/explorations/:id', explore.show) // GET - gets the _id of each restaurant from exploreations.js .then 'findByID'
router.post('/explorations/:id', explore.update) // POST - update user's explorations / restaurants they visited
router.delete('/explorations/:id', explore.delete) // DELETE - removes selected exploration / restaurant information

// -----_-_-____-___-_-_-----_-_____---______------_
// -----_-_-____-___-_-_-----_-_____---______------_
// -----_-_-____-___-_-_-----_-_____---______------_


// Create route index for Evaluations / Reviews :
router.get('/evaluation', eval.index) // GET navigates to user's reviews &&|| shows Reviews


// Create routes for navigating Explorations / Restaurants: 
router.get('/evaluation', eval.new) // GET - navigates to a page to create a new review page
router.get('/evaluation/:id', eval.show) // GET - shows page to create new review page 
router.post('/evaluation/:id', eval.create) // POST -  creates a new review page
router.get('/evaluations/:id/edit', eval.edit) // GET - shows the updates made to new review page


// -----_-_-____-___-_-_-----_-_____---______------_
// -----_-_-____-___-_-_-----_-_____---______------_
// -----_-_-____-___-_-_-----_-_____---______------_



module.exports = router;

// -----_-_-____-___-_-_-----_-_____---______------_
