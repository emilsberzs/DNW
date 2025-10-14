//Create new router
const express = require("express");
const router = express.Router();

//Handle main routes, and pass in variables
router.get("/", (request, response) => response.render("index.ejs", {title:"Dynamic Title", header:"Dynamic h1 tag from main.js"}))
router.get("/about", (request, response) => response.render("about.ejs"))
router.get("/search", (request,response)=> response.render("search.ejs"))
router.get("/search_result", function (request,response) {
    response.send("You searched for: " + request.query.search_text + " in category " + request.query.category)
});
router.get("/register", (request, response) => {
    response.render("register.ejs")
});
router.post("/registered", (request, response) => {
    response.send("Hello " + request.body.first + " " + request.body.last + ", You are now registered with an email " + request.body.email
        
    );
});
router.get("/list", function(request, response, next) {
    //Query database to get all the books
    let sql_query = "SELECT * FROM books;"

    //Execute SQL query
    db.query(sql_query, (err, result) => {
        if (err) {
            next(err);
        } else {
            response.send(result);
        }
    });
});
router.get("/bargainbooks", function(request, response, next) {
    // Query to get all books under 20
    let sql_query = "SELECT price, name FROM books where price<20;"

    //Execute query
    db.query(sql_query,(err, result) => {
        if (err) {
            next(err);
        } else {
            response.send(result)
        }
    });
});

// Export the router object so index.js can access it
module.exports = router;
