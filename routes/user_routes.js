const express = require("express");
const router = express.Router();
const passport = require("passport");

const userControllers = require("../controllers/user_controllers");



router.route("/signup")
    .post((req, res) => {
        resp=userControllers.addUser(req.body, res);
    if(resp){
        res.status(200).redirect("/")
    }
    })
router.route("/signin")
    .get((req, res) => {
        res.status(200).render("signin", {
        })
    })
    .post(passport.authenticate("local", {
        successRedirect: "/todo",
        failureRedirect: "/"
    }))

    

module.exports = router;