//Imports http module
var http = require("http");

const port = 8081;

//Server that always sends back 200 code and "Hello World!"
http.createServer(function(request,response) {
    response.writeHead(200, {"Content-Type":"text/plain"});
    response.end("Hello World!");
}).listen(port, function() {
    console.log(`Node server is running on port ${port}...`);
});

