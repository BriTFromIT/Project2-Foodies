let User = require('../models/User')
let Restaurant = require('../models/Restaurant')
// let Review = require('../models/Reviews')


let newUser = {
    // username: 'brittanylewis32@gmail.com',
    // password: 'AllBlackEverything3',
    yourlocation: 'Washington, DC',
    img: 'https://www.linkedin.com/in/brittfromit/',
    explorations: [{
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
        img: 'https://gaycities-featured-images-production.s3.amazonaws.com/events/originals/fb_12038682_1622885904633136_2177253583028108562_o.jpg',
    },
    {
        name: 'Ohhhs & Aahhs Soul Food',
        location: '1005 U St NW, Washington, DC 20001',
        contact: 2026677142,
        hours: [{
            friday: 'Friday	12PM–4AM',
            saturday: 'Saturday	12PM–4AM',
            sunday: 'Sunday	12–7PM',
            monday: 'Monday	12–10PM',
            tuesday: 'Tuesday 12–10PM',
            wednesday: 'Wednesday 12–10PM',
            thursday: 'Thursday	12–10PM'
        }],
        website: 'http://oohhsnaahhs.com/',
        description: 'The regions best soul food, dished out from a galley kitchen to customers who josh with chef Oji Abbott as they tear into heaped-high meals. The mac and cheese inspires devotion, fried chicken is the stuff of dreams, and candied yams conjure a homey Thanksgiving dinner.',
        img: 'http://i221.photobucket.com/albums/dd225/scaridad/IMG_0192.jpg',
        img: 'https://www.dinersdriveinsdiveslocations.com/oohhs-aahhs-grilled-whiting.jpg',
    },
    {
        name: 'PoBoyJims Bar & Grill',
        location: '3514 12th St. NE DC 20017',
        contact: 202733583,
        hours: 'Open at Noon daily with #SmithHour {Happy Hour} everyday from 5pm to 7pm and all day on Mondays',
        website: 'https://poboyjim.com/',
        description: 'The regions best soul food, dished out from a galley kitchen to customers who josh with chef Oji Abbott as they tear into heaped-high meals. The mac and cheese inspires devotion, fried chicken is the stuff of dreams, and candied yams conjure a homey Thanksgiving dinner.',
        img: 'http://i221.photobucket.com/albums/dd225/scaridad/IMG_0192.jpg',
        img: 'https://www.dinersdriveinsdiveslocations.com/oohhs-aahhs-grilled-whiting.jpg',
    }
    ]
    User.create(newUser).then(users => {
        console.log('Saved Users', users)
    })
}

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
