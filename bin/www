#!/usr/bin/env node
const { conn } = require("../db.js")
/**
 * Module dependencies.
 */

var app = require('../app');
var debug = require('debug')('chatapi:server');
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
 conn.sync({ force: true }).then(() => {
   server.listen(port, ()=>console.log("listening on port: "+port));



   
 })



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

