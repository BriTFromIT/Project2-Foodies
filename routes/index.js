// DATABASE CONNECTIONS : 

var express = require('express');
var router = express.Router();

// CONTROLLER CONNECTIONS: 
const appControl = require('../controller/application') //connecting the routes to the server
const foodie = require('../controller/foodie') // foodie.js || Users profile page
const explore = require('../controller/explorations') // explorations.js || explorations / restaurants
const eval = require('../controller/eval') // eval.js || Reviews 


// Created route index for Application.js controller:
router.get('/', appControl.index) // GET home page 

// -----_-_-____-___-_-_-----_-_____---______------_
// -----_-_-____-___-_-_-----_-_____---______------_


// Created route index for User profile:
router.get('/users', foodie.index) //GET user's page || shows User Profile

// Created routes for navigating User profile:
router.get('/users/new', foodie.new) //GET - navigates to new user page
router.post('/users', foodie.create) // POST - function for creating the user profile
router.post('/users', foodie.edit) // POST will show the create page for new user profile
router.get('/users/:id', foodie.show) // GET - shows new user profile// router.post('/users/:id/edit', foodie.edit) // GET -  Rendering the form to update user profile
// router.delete('/users/:id', explore.delete) // DELETE - removes selected exploration / restaurant information


// -----_-_-____-___-_-_-----_-_____---______------_
// -----_-_-____-___-_-_-----_-_____---______------_
// -----_-_-____-___-_-_-----_-_____---______------_

// Created route index for  Explorations / Restaurants:
router.get('/explorations', explore.index) // GET user's explorations &&|| shows Restaurants


// Created routes for navigating Explorations / Restaurants:
router.get('/explorations/new', explore.new)
router.post('/explorations', explore.create) // POST - function for creating the user profile
router.get('/explorations/:id', explore.show) // GET - shows the list of user's explorations || restaurants they've visisted
router.patch('/explorations/:id', explore.update) // PATCH - updates user info 

// router.patch('/events/:id', eventsController.update)
// router.delete('/events/:id', eventsController.delete)

// // -----_-_-____-___-_-_-----_-_____---______------_
// // -----_-_-____-___-_-_-----_-_____---______------_
// // -----_-_-____-___-_-_-----_-_____---______------_


// // Create route index for Evaluations / Reviews :
router.get('/evaluation', eval.index) // GET navigates to user's reviews &&|| shows Reviews


// // Create routes for navigating Explorations / Restaurants: 
router.get('/evaluation/new', eval.new) // GET - navigates to a page to create a new review page
router.post('/evaluation/:id', eval.create) // POST -  creates a new review page
router.get('/evaluation/:id', eval.show) // GET - shows page to create new review page 
// router.get('/evaluations/:id/edit', eval.edit) // GET - shows the updates made to new review page
router.delete('/evaluation/:id', eval.delete) // DELETE - removes selected exploration / restaurant information
router.post('/evaluation/:id', eval.update) // POST - update user's explorations / restaurants they visited


// -----_-_-____-___-_-_-----_-_____---______------_
// -----_-_-____-___-_-_-----_-_____---______------_
// -----_-_-____-___-_-_-----_-_____---______------_



module.exports = router;

// -----_-_-____-___-_-_-----_-_____---______------_
