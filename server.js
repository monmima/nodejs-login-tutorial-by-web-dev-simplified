const express = require("express");
const app = express();

app.set("view-engine", "ejs");

/**
 * This is telling the app that we want to take the forms and we want to able able to access them inside of our req variable inside of our posts methods.
 */
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.render("index.ejs", { name: "Kyle" });
});

app.get("/login", (req, res) => {
    res.render("login.ejs");
});

app.post("/login", (req, res) => {
    
});

app.get("/register", (req, res) => {
    res.render("register.ejs");
});

app.post("/register", (req, res) => {
    
});


app.listen(3000);