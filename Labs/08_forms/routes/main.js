// Create a new router
const express = require("express");
const router = express.Router();

// Handle the main routes
router.get("/", (req, res) => {
    res.render("index.ejs", { title: "Dynamic title", header: "This is dynamic header" })
});
router.get("/about", (req, res) => {
    //Dynamic title passed in as a parameter
    res.render("about.ejs")
});
router.get("/search", (req, res) => {
    res.render("search.ejs")
});
// Export the router object so index.js can access it
module.exports = router;