var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');
var express = require('express');

app.listen(3000);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

io.on('connection', function (socket) {
  socket.emit('connected', { "msg" : "Connected" });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

var values = require('./jobs/values.js').init(io);
values.run();
