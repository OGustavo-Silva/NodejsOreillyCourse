const request = require('request') //npm i request@2.88.0

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-23.618&lon=-46.635&appid=bf00f9c8ad3a0e102fe5d2d0710178e1&units=metric'

request({ url:url, json:true }, (erorr, response) => {
    console.log(response.body.weather[0].main + '\nIt\'s currently ' +
        response.body.main.temp + 'Cº' +
        '\nAnd it feels like ' + response.body.main.feels_like + 'Cº')
})