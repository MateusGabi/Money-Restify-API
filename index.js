var restify = require('restify');
var app = require('./app.js');

var server = restify.createServer();
server.get('/hello/:name', app.sayHello);
server.head('/hello/:name', app.sayHello);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});