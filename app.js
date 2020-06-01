const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose')
const passport = require("passport");
const session = require("express-session");

const db = mongoose.connect("mongodb://localhost/todo",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
const app = express();
app.use(session({secret:"user"}));
require("./config/passport.js")(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.set("views", "./src/views");
app.set("view engine", "ejs");
module.exports.db = db;
module.exports = app;