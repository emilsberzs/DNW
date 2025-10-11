const express = require("express");

//Creates an app object, that can access all of the Express methods
const app = express();
const port = 8081;

// Get route handler, handles all the get requests.
// Response can be string, or HTML as a string as well
app.get("/", (request, response) => response.send("<body><h1>Hello Express!</h1><p>First Express App</p></body>"));

// Starts the web server listening to HTTP messages on specified port
app.listen(port,() => console.log(`Node server running on port ${port}...`))
