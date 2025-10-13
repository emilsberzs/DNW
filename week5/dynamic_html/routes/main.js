//Create new router
const express = require("express");
const router = express.Router();

//Handle main routes, and pass in variables
router.get("/", (request, response) => response.render("index.ejs", {title:"Dynamic Title", header:"Dynamic h1 tag from main.js"}))
router.get("/about", (request, response) => response.render("about.ejs"))

// Export the router object so index.js can access it
module.exports = router;
