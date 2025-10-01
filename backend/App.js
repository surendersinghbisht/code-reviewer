const express = require('express')

const app = express()

app.get('/', (req, res)=> {
    res.send('Hello World')
})
app.get('/ai', (req, res)=> {
    res.send('AI')
})
module.exports = app