var http = require("http");
const port = 8081;
var dt = require("./date.js");

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("The current date and time is: "+ dt.myDateTime() + "\n");
    res.end("Hello World Again!");
}).listen(port, function () {
    console.log(`Node server is running on port ${port}...`);
});
