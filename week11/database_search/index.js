// Set up Express
const express = require("express");
const app = express();
const mysql = require("mysql2")
const root = require("./secrets.js")
const port = 8081;

//Set the rendering engine for Express to EJS
app.set("view engine", "ejs")

//Set up the body parser
app.use(express.urlencoded({extended:true}))

//Define the database connection
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:root,
    database:'myBookShop'
})

//Connect to database
db.connect((err) =>{
    if (err) {
        throw err
    }
    console.log('Connected to database')
})
global.db = db

//Load the route handlers
const mainRoutes = require("./routes/main");
app.use('/', mainRoutes);

//Start listening for HTTP requests
app.listen(port, () => console.log(`Node server running on port ${port}`));