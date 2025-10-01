const express = require('express')

const app = express()

app.get('/', (req, res)=> {
    res.send('Hello World')
})
app.get('/ais', (req, res)=> {
    res.send('AI')
})
module.exports = app