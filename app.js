const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))

let items = [];

app.get("/", (req, res) => {
    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    let day = today.toLocaleDateString("en-US", options);


    res.render('list', { day: day, newListItems: items });

});

app.post("/", (req, res) => {
    let newItem = req.body.newTask;
    if (newItem != "") items.push(newItem);
    res.redirect("/");

});

app.listen(3000, () => console.log("PORT 3000 ::: SERVER ON"))