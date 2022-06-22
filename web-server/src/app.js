const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')//setup handlebars | npm i hbs@4.0.1
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Gustavo'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About page'
    })
})

app.get('/help', (req, res) => {
    res.render('about', {
        helpText: 'Help page'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'Philadelphia',
        forecast: 'Clouds'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})