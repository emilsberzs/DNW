// Create a new router
const express = require("express");

// Set up bcrypt
const bcrypt = require('bcrypt')

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

router.get("/search_result", function (req, res, next) {
    // Search the database
    let sqlquery = "SELECT * FROM books WHERE name LIKE ?";
    // Execute sql query
    let word = ['%' + req.query.search_text + '%'];
    db.query(sqlquery, word, (err, result) => {
        if (err) {
            next(err);
        }
        else if (result.length == 0) {
            res.send("No book matches the search term " + word);
        }
        else {
            res.render('list.ejs', { availableBooks: result });
        }
    });
});

router.get("/register", (req, res) => {
    res.render("register.ejs");
});

router.post("/registered", (req, res, next) => {
    const saltRounds = 10
    const plainPassword = req.body.password
    // Hash the password
    bcrypt.hash(plainPassword, saltRounds, function (err, hashedPassword) {
        // Store hashed password in your database.
        let sqlquery = "INSERT INTO users (username, firstname, lastname,hashed_password) VALUES(?,?,?,?)"
        // Execute sql query
        let newrecord = [req.body.username, req.body.first, req.body.last,
            hashedPassword]
        db.query(sqlquery, newrecord, (err, result) => {
            if (err) {
                next(err)
            } else {
                result = 'Hello ' + req.body.first + ' ' + req.body.last
                    + ' you are now registered! We will send an email to you at '
                    + req.body.email
                res.send(result)
            }
        })
    })
});

router.get("/list", function (req, res, next) {
    // Query database to get all the books
    let sqlquery = "SELECT * FROM books";
    // Execute sql query
    db.query(sqlquery, (err, result) => {
        if (err) {
            next(err);
        } else {
            res.render("list.ejs", { availableBooks: result });
        }
    });
});

router.get("/bargainbooks", function (req, res, next) {
    // Query database to get all the books
    let sqlquery = "SELECT * FROM books WHERE price<20";
    // Execute sql query
    db.query(sqlquery, (err, result) => {
        if (err) {
            next(err);
        } else {
            res.render("list.ejs", { availableBooks: result })
        }
    });
});

router.get("/addbook", (req, res) => {
    res.render("add_book.ejs");
});

router.post("/bookadded", function (req, res, next) {
    // Create query
    let sqlquery = "INSERT INTO books (name, price) VALUES (?,?)";
    // Execute sql query
    let newrecord = [req.body.name, req.body.price];
    db.query(sqlquery, newrecord, (err, result) => {
        if (err) {
            next(err);
        } else {
            res.send(" This book is added to database, name: " +
                req.body.name + " with listing price: £" + req.body.price + "<p><a href='./list'>List of books</a></p>");
        }
    });
});

// Export the router object so index.js can access it
module.exports = router;