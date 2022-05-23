const request = require('request') //npm i request@2.88.0

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=32&lon=46&appid=bf00f9c8ad3a0e102fe5d2d0710178e1'

request({ url:url }, (erorr, response) => {
    const data = JSON.parse(response.body)
    console.log(data)
})