const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?types=place&access_token=pk.eyJ1Ijoib2d1c3Rhdm8tc2lsdmEiLCJhIjoiY2w0NGJkd3IyMG1seDNpbGx6dGZ3ZG5taCJ9.pkXxfk0tmpu7UJ8ztnCyOA'

    request({url: url, json:true}, (error, response) =>{
        if(error){
            callback('Unable to connect to Mapbox services!', undefined)
        }else if (response.body.features.length === 0){
            callback('Unable to find location', undefined)
        }else{
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode