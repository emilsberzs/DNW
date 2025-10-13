// Set up Express
const express = require("express");
const app = express();
const port = 8081;

//Set the rendering engine for Express to EJS
app.set("view engine", "ejs")

//Load the route handlers
const mainRoutes = require("./routes/main");
app.use('/', mainRoutes);

//Start listening for HTTP requests
app.listen(port, () => console.log(`Node server running on port ${port}`));