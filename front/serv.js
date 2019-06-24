const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'build')))

app.get('/', function(req, res) {
    console.log('touch on "/" path')
    console.log('process.env', process.env)
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(80)
console.log('server started')