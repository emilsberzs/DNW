//Create new router
const express = require("express");
const router = express.Router();

//Handle main routes
router.get("/", (request, response) => response.render("index.ejs"))
router.get("/about", (request, response) => response.render("about.ejs"))

// Export the router object so index.js can access it
module.exports = router;
