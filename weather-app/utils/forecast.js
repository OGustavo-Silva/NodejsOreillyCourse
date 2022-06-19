const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=bf00f9c8ad3a0e102fe5d2d0710178e1&units=metric'

    request({url: url, json:true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to weather services!', undefined)
        }else if(body.cod == "400"){//if it cant locate the lat and long provided
            callback('Unable to find location!', undefined)
        }else{
            callback(undefined, body.weather[0].main + '\nIt\'s currently ' +
            body.main.temp + 'Cº' +
            '\nAnd it feels like ' + body.main.feels_like + 'Cº')
        }
    })
}

module.exports = forecast