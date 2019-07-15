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

app.use(requireHTTPS)

function requireHTTPS(req, res, next) {
  // The 'x-forwarded-proto' check is for Heroku
  if (!req.secure && req.get('x-forwarded-proto') !== 'https' && process.env.NODE_ENV !== "development") {
    return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
}

app.get('/*', function(req, res) {
	if(!req.secure && req.get('x-forwarded-proto') !== 'https') {
		res.redirect('https://' + req.get('host') + req.url)
	} else {
		res.sendFile(path.join(__dirname, 'build', 'index.html'))
	}
})

// Starting both http & https servers
const httpServer = http.createServer(app)
const httpsServer = https.createServer(credentials, app)

httpServer.listen(80, () => {
	console.log('HTTP Server running on port 80')
})

httpsServer.listen(443, () => {
	console.log('HTTPS Server running on port 443')
})