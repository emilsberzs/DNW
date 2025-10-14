//Create new router
const express = require("express");
const router = express.Router();

//Handle main routes, and pass in variables
router.get("/", (request, response) => response.render("index.ejs", {title:"Dynamic Title", header:"Dynamic h1 tag from main.js"}))
router.get("/about", (request, response) => response.render("about.ejs"))
router.get("/search", (request,response)=> response.render("search.ejs"))
router.get("/search_result", function (request,response,next) {
    //Search the database
    let sql_query = "SELECT * FROM books WHERE name LIKE ?;"

    //Execute SQL query
    let word = ['%' + request.query.search_text + '%'];
    db.query(sql_query,word,(err,result)=>{
        if(err){
            next(err);
        }else if (result.length==0) {
            response.send("No book matches the search term" + word);
        }
        else{
            response.render('list.ejs', {availableBooks:result});
        }
    });
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
            response.render("list.ejs", {availableBooks:result});
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
            response.render("list.ejs", {availableBooks:result});
        }
    });
});
router.get("/addbook",(request, response) => response.render("addbook.ejs"));
router.post("/bookadded", function (request, response, next) {
    //Create Query
    let sql_query = "INSERT INTO books (name, price) VALUES (?,?);"

    //Execute query
    let new_record = [request.body.name, request.body.price]
    db.query(sql_query, new_record, (err, result) => {
        if (err){
            next(err);
        }else{
            response.send("This book is added to the database,  Name: " + 
                 request.body.name + ', Price: ' + request.body.price +
                "<a href='list'>View all Books</a>");
        }
    })
})
// Export the router object so index.js can access it
module.exports = router;
