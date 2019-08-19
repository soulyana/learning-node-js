const request = require('request')

const url = 'https://api.darksky.net/forecast/5152bdaff6d2519bec588af173398ccc/37.8267,-122.4233?lang=fr';

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Error unable to connect weather service');
//     } else if (response.body.error) {
//         console.log('Unable to find location');
//     } else {
//         // parse data
//         console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
//     }
// })



//  Geocoding 
// User provided address -> Lat/Long conversion -> weather displayed 
const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/los%20a.json?access_token=pk.eyJ1IjoibWF0dGZpY2tlIiwiYSI6ImNqNnM2YmFoNzAwcTMzM214NTB1NHdwbnoifQ.Or19S7KmYPHW8YjRz82v6g&cachebuster=1566237866744&autocomplete=true'

request({url: geocodeUrl, json: true}, (error, response) => {

    if (error) {
        console.log('Unable to connect to geolocation services');
    } else if(response.body.features.length === 0) {
        console.log('Location services error');
    } else {
        const latitude = response.body.features[0].center[1];
        const longitude = response.body.features[0].center[0];
        console.log('Latitude and longitude: ' + latitude + ', ' + longitude);
    }
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