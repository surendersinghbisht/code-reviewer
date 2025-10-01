const express = require('express')

const app = express()

app.get('/', (req, res)=> {
    res.send('Hello World')
})
app.get('/ais', (req, res)=> {
    res.send('AI')
})

app.get('/sample', (req, res)=> {
    res.send('sample')
})
module.exports = app