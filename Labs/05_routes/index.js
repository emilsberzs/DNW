const express = require("express");
const app = express();

const port = 8081;

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/about", (req, res) => res.send("<h1>This is the about page</h1>"));
app.get("/search", (req, res) => res.send("<h2>This is the page for searching</h2>"));

app.listen(port,
    () => console.log(`Node server is running on port ${port}...`));