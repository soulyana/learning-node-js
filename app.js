const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// Goal: Accept location via command line arg
// console.log(process.argv);
const address = process.argv[2];

if (!address) {
    console.log('Please provide address')
} else {
    geocode(address, (error, data) => {
        if (error) {
            return console.log(error)
        }
    
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if(error) {
                return console.log(error)
            }
    
            console.log(data.location);
            console.log(forecastData);
        });
    });
    
}
// Callback chaining 
// Geocoding: Address -> Lat/Long -> Weather

