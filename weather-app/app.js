const request = require('request') //npm i request@2.88.0

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-23.618&lon=-46.635&appid=bf00f9c8ad3a0e102fe5d2d0710178e1&units=metric'

// request({ url:url, json:true }, (error, response) => {
//     if(error){
//         console.log('Unable to connect to weather service!')
//     }else if(response.body.cod == "400"){ //if it cant locate the lat and long provided
//         console.log('Unable to find location')
//     }
//     else{
//         console.log(response.body.weather[0].main + '\nIt\'s currently ' +
//            response.body.main.temp + 'Cº' +
//            '\nAnd it feels like ' + response.body.main.feels_like + 'Cº')
//     }
          
// })

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/s%C3%A3o%20paulo.json?types=place&access_token=pk.eyJ1Ijoib2d1c3Rhdm8tc2lsdmEiLCJhIjoiY2w0NGJkd3IyMG1seDNpbGx6dGZ3ZG5taCJ9.pkXxfk0tmpu7UJ8ztnCyOA'
request({ url:geocodeURL, json:true }, (error, response) => {
    if(error){
        console.log('Unable to connect to mapbox services')
    }else if(response.body.features.length < 1){
        console.log('Unable to find location')
    }else{
        const latitude = response.body.features[0].center[0]
        const longitude = response.body.features[0].center[1]
        console.log(latitude, longitude)
    }
})