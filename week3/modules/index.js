var http = require("http");
const port = 8081;
// Imports date.js module into this one
var date_time = require("./date")

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type":"text/plain"});
    // Writes data from imported module to response
    response.write("The current date and time is: " + date_time.myDateTime() + "\n")
    response.end("Hello World... Again.");
    }).listen(port, function() {
        console.log(`Node serveris running on port ${port}...`)
    })