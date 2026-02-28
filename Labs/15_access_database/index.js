// Set up express
const express = require("express");
const app = express();
const mysql = require("mysql2");
const port = 8081;
const root = require('../secrets.js')

// Set the rendering engine for Express to EJS
app.set("view engine", "ejs");

// Set up the body parser
app.use(express.urlencoded({ extended: true }));

// Define the database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: root,
    database: 'myBookshop'
})
// Connect to the database
db.connect((err) => {
    if (err) {
        throw err
    }
    console.log('Connected to database')
})
global.db = db

// Load the route handlers
const mainRoutes = require("./routes/main");
app.use('/', mainRoutes);

// Start listening for HTTP requests
app.listen(port,
    () => console.log(`Node server is running on port ${port}...`));