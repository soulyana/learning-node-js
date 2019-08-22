const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// Geocoding: Address -> Lat/Long -> Weather
geocode('New York', (error, data) => {
    console.log('Error', error);
    console.log('Data', data)
})

//GOAL: Create a reusable function for getting the forecast
forecast(-73.9808, 40.7648, (error, data) => {
    console.log('Error ', error)
    console.log('Data ', data)
})