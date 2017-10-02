var restify = require('restify');
var app = require('./app.js');


/*---- INITIALIZE THE SERVER ONE ----*/
var server = restify.createServer({
    name: 'Restify Server Test'
});

server.use(restify.plugins.queryParser());

/*---- SERVER ROUTES ----*/
server.get('/', app.showLatest);
server.get('/go', app.fixer);


/*---- LISTENING ----*/
server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.version, server.url);
});