const request = require('request')

const url = 'https://api.darksky.net/forecast/5152bdaff6d2519bec588af173398ccc/37.8267,-122.4233?lang=fr';

request({url:url, json: true}, (error, response) => {
    // parse data
    console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')   
})

//  Geocoding 
// User provided address -> Lat/Long conversion -> weather displayed 
const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic291bHlhbmEiLCJhIjoiY2p6aWttM20xMDA5ZTNvcXQ3bnN5NHlyMiJ9.gZOKCCjuGu3BAiTsl81VlA&limit=1'

request({url: geocodeUrl, json: true}, (error, response) => {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    console.log('Latitude and longitude: ' + latitude + ', ' + longitude);
    // console.log(response.body.features.center[0] + ' is longitue ' + response.body.features.center[1] + ' is latitude. ');
})



// console.log('Starting');

// setTimeout(() => {
//     console.log('2 second timer');    
// }, 2000)

// setTimeout(() => {
//     console.log('Zero seconds!');
// }, 0)

// console.log('stopping');

// const listLocations = (locations) => {
//     locations.forEach((location) => {
//         console.log(location);
//     });
// }

// const myLocations = ['Philly', 'NYC'];

// listLocations(myLocations);