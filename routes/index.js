// OTHER ROUTES
var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

// ROOT
router.get("/", function(req, res){
    res.render("landing");
});

// REGISTER FORM
router.get("/register", function(req, res){
    res.render("register")
});

router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    if(req.body.adminCode === "iamadmin18"){
        newUser.isAdmin = true;
    }

    User.register(newUser, req.body.password, function(err, user){
        if(err){
            req.flash("error", err.message);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
            req.flash("success", "Welcome to RentTent " + user.username);
            res.redirect("/campgrounds");
        });
    });
});

// LOGIN FORM
router.get("/login", function(req, res){
    res.render("login");
});

router.post("/login", passport.authenticate("local", 
    {successRedirect: "/campgrounds",
     failureRedirect: "/login"
    }), function(req, res){
});

// LOGOUT
router.get("/logout", function(req, res){
    req.logout();
    req.flash("success", "Logged you out")
    res.redirect("/campgrounds");
});

module.exports = router;