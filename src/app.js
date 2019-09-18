const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('<h1>Weather</h1>')
})

app.get('/help', (req, res) => {
    res.send({
        name: 'Soulyana',
        age: 25
    })
})

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>')
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It\'s warm and sunny',
        location: 'Washington DC'
    })
})

// start server
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})