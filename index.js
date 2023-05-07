// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((res) => {
//  res.writeHead(200, { 'content-type': 'text/html' })
//  fs.createReadStream('index.html').pipe(res)
// })

// server.listen(process.env.PORT || 3000)

var http = require("http");
var fs = require('fs');

//create a server object:
http
  .createServer(function(res) {
    res.writeHead(200, {'content-type': 'text/html' }); //write a response to the client
    fs.createReadStream('index.html').pipe(res)
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
