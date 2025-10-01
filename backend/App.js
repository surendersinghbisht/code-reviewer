const express = require('express')

const app = express()

app.get('/', (req, res)=> {
    res.send('Hello World')
})
app.get('/ais', (req, res)=> {
    res.send('AI')
})

app.get('/new', (req, res)=> {
    res.send('new')
})
module.exports = app