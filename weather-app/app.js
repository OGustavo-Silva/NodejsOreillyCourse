const request = require('request') //npm i request@2.88.0

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-23.618&lon=-46.635&appid=bf00f9c8ad3a0e102fe5d2d0710178e1&units=metric'

request({ url:url, json:true }, (erorr, response) => {
    console.log(response.body.weather[0].main + '\nIt\'s currently ' +
        response.body.main.temp + 'Cº' +
        '\nAnd it feels like ' + response.body.main.feels_like + 'Cº')
})

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/s%C3%A3o%20paulo.json?types=place&access_token=pk.eyJ1Ijoib2d1c3Rhdm8tc2lsdmEiLCJhIjoiY2w0NGJkd3IyMG1seDNpbGx6dGZ3ZG5taCJ9.pkXxfk0tmpu7UJ8ztnCyOA'
request({ url:geocodeURL, json:true }, (error, response) => {
    const latitude = response.body.features[0].center[0]
    const longitude = response.body.features[0].center[1]
    console.log(latitude, longitude)
})