// let User = require('../models/User')
let Restaurant = require('../models/Restaurant')
// let Review = require('../models/Reviews')


// let newUser = {
//     username: 'brittanylewis32@gmail.com',
//     password: 'AllBlackEverything3',
//     yourlocation: 'Washington, DC',
//     img: 'https://www.linkedin.com/in/brittfromit/',
//     explorations: [ {
//         name: 'Sprinkles',
//         description: 'A lotta sprinkles, a lotta yum.',
//         img: 'http://cdn.phillymag.com/wp-content/uploads/2013/09/donut.png',
//         price: 5,
//         qty: 99
//       },
//       {
//         name: 'Plain Ole Donut',
//         description: 'Plain donut for plain people.',
//         img: 'https://grandmastersensei.files.wordpress.com/2009/06/donut.jpg',
//         price: 25,
//         qty: 15
//       },
//       {
//         name: 'Chocolate',
//         description: 'Chocolate Donut nom nom nom',
//         img:
//           'https://deerfieldsbakery.com/images/items/Other/Pastries-Donuts-Chocolate-Iced-Glazed_MD.jpg',
//         price: 7000,
//         qty: 1
//       },
//     ],
// }

let newRestaurant = 
  {
    name: 'Foodies',
    slogan: 'Meet Foodies in your area and explore your favorite restaurants!',
    img: String,
  }


Restaurant.create(newRestaurant).then(restaurants => {
  console.log('Saved Restaurants', restaurants)
})



// let newReview = {
//     name: String,
//     img: String,
//     price: String,
//     review: String,
//     rating: String,
// }
