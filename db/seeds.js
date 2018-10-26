let User = require('../models/User')
let Restaurant = require('../models/Restaurant')
let Reviews = require('../models/Reviews')


let newUser = {
    name: 'Foodies',
    // username: 'brittanylewis32@gmail.com',
    // password: 'AllBlackEverything3',
    yourlocation: 'Washington, DC',
    img: 'https://www.linkedin.com/in/brittfromit/',
    slogan: 'Meet Foodies in your area and explore your favorite restaurants!',
}

User.create(newUser).then(users => {
        console.log('Saved Users', users)
    })

let newRestaurant1 = new Restaurants ({
    explorations:  {
        name: 'Smith Public Trust',
        location: '3514 12th St. NE DC 20017',
        contact: 202733583,
        hours: [{
            friday: 'Friday 12pm - 12am',
            saturday: 'Saturday 12pm - 12am',
            sunday: 'Sunday 12pm - 11pm',
            monday: 'Monday Closed',
            tuesday: 'Tuesday 12pm - 11pm',
            wednesday: 'Wednesday 12pm - 11pm',
            thursday: 'Thursday 12pm - 11pm',
        }],
        website: 'http://www.smithpublictrustdc.com/',
        description: 'Dining room, public house and fun progressive space, offering approachable cuisine, craft beer, spirits & wine in the heart of #Brookland, DC. Located one block from CUA/Brookland Metro with free high-speed WiFi, private bar space, a live performance stage & an outdoor patio.',
        img: 'http://brooklandbridge.com/wp-content/uploads/2017/02/FullSizeRender-71-300x202.jpg',
        img: 'https://gaycities-featured-images-production.s3.amazonaws.com/events/originals/fb_12038682_1622885904633136_2177253583028108562_o.jpg'
    }
})

Restaurant.create(newRestaurant1).then(restaurants => {
    console.log('Saved Restaurants', restaurants)
})

let newRestaurant2 = new Restaurants ({
        name: 'Ohhhs & Aahhs Soul Food',
        location: '1005 U St NW, Washington, DC 20001',
        contact: 2026677142,
        hours: [{
            friday: 'Friday	12PM – 4AM',
            saturday: 'Saturday	12PM – 4AM',
            sunday: 'Sunday	12 – 7PM',
            monday: 'Monday	12–10PM',
            tuesday: 'Tuesday 12–10PM',
            wednesday: 'Wednesday 12–10PM',
            thursday: 'Thursday	12–10PM'
        }],
        website: 'http://oohhsnaahhs.com/',
        description: 'The regions best soul food, dished out from a galley kitchen to customers who josh with chef Oji Abbott as they tear into heaped-high meals. The mac and cheese inspires devotion, fried chicken is the stuff of dreams, and candied yams conjure a homey Thanksgiving dinner.',
        img: 'http://i221.photobucket.com/albums/dd225/scaridad/IMG_0192.jpg',
        img: 'https://www.dinersdriveinsdiveslocations.com/oohhs-aahhs-grilled-whiting.jpg'
})

Restaurant.create(newRestaurant2).then(restaurants => {
    console.log('Saved Restaurants', restaurants)
})

let newRestaurant3 = new Restaurants ({
        name: 'PoBoyJims',
        location: '1934 9th St. NW Washington, DC 20001',
        contact: 2026272687,
        hours: [{
            friday: 'Friday	11AM – 12AM',
            saturday: 'Saturday	11AM – 12AM',
            sunday: 'Sunday	11AM – 10PM',
            monday: 'Monday	11AM – 10PM',
            tuesday: 'Tuesday 11AM – 10PM',
            wednesday: 'Wednesday 11AM – 10PM',
            thursday: 'Thursday	11AM – 10PM'
        }],
        website: 'https://poboyjim.com/',
        description: 'Po Boy Jim is a family-owned restaurant that specializes Po’ Boys that are traditional and/or uniquely crafted. We aim to provide our patrons with high quality food and beverages in a casual, rustic environment, so that food, drinks, and customer service are the highlight of the experience.',
        img: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwju-fuYlaXeAhXKTd8KHVz8BssQjRx6BAgBEAU&url=https%3A%2F%2Ffaroutawardsblog.com%2F2015%2F01%2F07%2Fpo-boy-eating-contest%2F&psig=AOvVaw1eXSIjQ1_bJXYrUA_C4_oF&ust=1540679526994400',
        img: 'https://poboyjim.com/gallery/#!jig[1]/https://scontent.cdninstagram.com/vp/d18270774769f0415ffb00753c05cf0a/5C4D1B84/t51.2885-15/sh0.08/e35/s640x640/42582798_1912861875416782_1478755084091718507_n.jpg'
})

Restaurant.create(newRestaurant3).then(restaurants => {
    console.log('Saved Restaurants', restaurants)
})






let smithPublicTrustDc = new Reviews ({
    name: String,
    img: 'http://img.food.com/img/recipes/47/47/92/large/picJ3R9Br.jpg',
    price: 12,
    review: 'https://www.yelp.com/biz/smith-public-trust-washington',
    rating: '  ',
})

let ohsAndAhs = new Reviews ({
    name: String,
    img: String,
    price: String,
    review: String,
    rating: String,
})

let poBoyJims = new Reviews ({
    name: String,
    img: String,
    price: String,
    review: String,
    rating: String,
})

// User.removeMany({})
    // .then(() => Reviews.insertMany([smithPublicTrustDc, ohsAndAhs, poBoyJims]))
    // .then(() => kroger.save())
    // .then(() => target.save())
    // .then(() => walmart.save())
    // .then(() => console.log("Database seeded success"))
    // .then(() => mongoose.connection.close()) //automatically closes mongoose