// server.js
const jsonServer = require('json-server');
const path = require('path');
const express = require('express');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const PORT = 4000;
const port = normalizePort(process.env.PORT || PORT);

server.use(middlewares);

// server.use(express.static(path.join(__dirname, 'build')));
// server.get('*', function(req, res) {
//   res.sendFile(path.join(__dirname + '/build/index.html'));
// });

server.use(router);
server.listen(port, () => {
  console.log('JSON Server is running');
});

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
