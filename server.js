var vertx = require('vertx');
var console = require('vertx/console');
console.log('starting server on port 8080...');
var sock1 = null; 
var client = vertx.createNetClient();
client.connect(81, 'localhost', function(err, sock) {
  sock1 = sock;
  if (!err) {
    console.log('We have connected');
  } else {
    console.log('could not connect');
  }
});

vertx.createHttpServer().requestHandler(function(req) {
  req.response.end("Hello World!");
  sock1.write("hello world\n");

}).listen(8080, 'localhost');
