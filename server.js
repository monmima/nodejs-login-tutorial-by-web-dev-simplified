const express = require("express");
const app = express();
const bcrypt = require("bcrypt");

/**
 * Normally, you would use a database instead.
 */
const users = [];

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

app.post("/register", async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        users.push({
            /**
             * With a database, this would be automatically generated so you wouldn't have to worry about this step.
             */
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });
        /**
         * So the user can login with the account he's just registered.
         */
        res.redirect("/login");
    } catch {
        /**
         * In case of an error, redirects the user to the /register page.
         */
        res.redirect("/register");
    }
    console.log(users);
});


app.listen(3000);