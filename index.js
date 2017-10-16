var restify = require('restify');
var app = require('./src/app.js');


/*---- INITIALIZE THE SERVER ONE ----*/
var server = restify.createServer({
    name: 'Mateus Gabi Moreira Currency Converter Server',
    version: '1.2.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());

/*---- SERVER ROUTES ----*/
server.get('/', app.fixer);
server.get('/go', app.fixer);


/*---- LISTENING ----*/
server.listen(process.env.PORT || 8080, function() {
  console.log('%s (v %s) listening at %s', server.name, server.version, server.url);
});