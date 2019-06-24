const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'build'), { dotfiles: 'allow' }))

// app.get('/', function(req, res) {
//     console.log('touch on "/" path')
//     res.sendFile(path.join(__dirname, 'build', 'index.html'))
// })

app.listen(80, () => {
  console.log('HTTP server running on port 80');
});