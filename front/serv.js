const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()
const http = require('http')
const https = require('https')

// Certificate
const credentials = {
	key: fs.readFileSync('/etc/letsencrypt/live/lenoir.dev/privkey.pem', 'utf8'),
	cert: fs.readFileSync('/etc/letsencrypt/live/lenoir.dev/cert.pem', 'utf8'),
	ca: fs.readFileSync('/etc/letsencrypt/live/lenoir.dev/chain.pem', 'utf8')
}

app.use(express.static(path.join(__dirname, 'build'), { dotfiles: 'allow' }))

// app.get('/', function(req, res) {
//     console.log('touch on "/" path')
//     res.sendFile(path.join(__dirname, 'build', 'index.html'))
// })

// app.use((req, res) => {
// 	res.send('Hello there !')
// })

// Starting both http & https servers
const httpServer = http.createServer(app)
const httpsServer = https.createServer(credentials, app)

httpServer.listen(80, () => {
	console.log('HTTP Server running on port 80')
})

httpsServer.listen(443, () => {
	console.log('HTTPS Server running on port 443')
})