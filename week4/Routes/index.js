// First imports express module/ovject
const express = require("express");


//Creates an app object, that can access all of the Express methods
const app = express();

const port = 8081;

// Get route handler, handles all the get requests.
// Response can be string, or HTML as a string as well
app.get("/", (request, response) => response.send("<body><h1>Hello Express!</h1><p>First Express App</p><ul><li><a href='/about'>About page</a></li><li><a href='/contact'>Contact page</a></li></body>"));
///Add "About"  and "Contact" page routes
app.get("/about", (request, response) => response.send("<h1>This is the About page</h1>"))
app.get("/contact", (request, response) => response.send("<h1>This is the Contact page</h1>"))

// Starts the web server listening to HTTP messages on specified port
app.listen(port, () => console.log(`Node server running on port ${port}...`))
