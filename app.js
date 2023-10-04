const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    let today = new Date();
    let dayNum = today.getDay();
    // let dayNum = 4;

    let dayNames = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

    res.render('list', { day: dayNames[dayNum] });

});

app.listen(3000, () => console.log("PORT 3000 ::: SERVER ON"))