// Import app module using require. This module is the starting point for Web APIs

// Create HTTP server instance and add app module to HTTP server instance

// Listen server on port number 3000 or any other available port
var app = require('./server/app');

var http = require('http');

var httpServer = http.createServer(app);

var port = 3000; // you can use any port

httpServer.listen(port);

console.log('server on' + port);
