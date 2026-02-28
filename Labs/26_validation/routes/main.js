// Create a new router
const express = require("express");

// Set up bcrypt
const bcrypt = require('bcrypt')

const router = express.Router();

//Redirect isf trying to access addbook without login
const redirectLogin = (req, res, next) => {
    if (!req.session.userId) {
        res.redirect('./login') // redirect to the login page
    } else {
        next(); // move to the next middleware function
    }
}

const { check, validationResult } = require('express-validator');

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

router.post("/registered",
    [check('email', "Invalid email address").isEmail()],
    (req, res, next) => {
        // Validation
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.send(errors.mapped())
        }
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

router.get("/addbook", redirectLogin, (req, res) => {
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

router.get('/login', function (req, res, next) {
    res.render('login.ejs')
});

router.post('/loggedin', function (req, res, next) {
    // Select the hashed password for the user from the database
    let sqlquery = "SELECT id, hashed_password FROM users WHERE username =?"
    db.query(sqlquery, [req.body.username], (err, result) => {
        if (err) {
            next(err)

        } else {
            // Extract the matching row information
            const hashedPassword = result[0].hashed_password
            const userId = result[0].id
            // Compare the password supplied with the password retrieved from the db
            bcrypt.compare(req.body.password, hashedPassword, function (err, result) {
                if (err) {
                    next(err)
                }
                else if (result == true) {
                    // Save user session here, when login is successful
                    req.session.userId = req.body.username;
                    res.send("Logged in successfully!")
                }
                else {
                    res.send("Login failed: passwords don't match")
                }
            })
        }
    })
});

router.get('/logout', redirectLogin, (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.redirect('./')
        }
        res.send('You are now logged out');
    })
});


// Export the router object so index.js can access it
module.exports = router;