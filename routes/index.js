var express = require("express");
var router = express.Router();
var passport = require("passport");
var client = require("../models/client");
var User = require("../models/user");
var middleware = require("../middleware")


router.get("/", middleware.isLoggedIn, function(req, res){
    res.redirect("/data");
});

//INDEX ROUTE
router.get("/data", middleware.isLoggedIn, function(req, res){
    client.find({},function(err, clients){
        if(err){
            console.log("Error!");
        } else {
            res.render("index", {clients: clients});
        }
    });
});


//AUTHENTICATION
//Show registration page
router.get("/register", function(req, res){
    res.render("register");
});

//Registration logic route
router.post("/register", function(req, res){
   var newUser = new User({username: req.body.username});
   User.register(newUser, req.body.password, function(err, user){
       if(err){
           console.log(err);
           req.flash("error", err.message);
           return res.redirect("register");
       }
       passport.authenticate("local")(req, res, function(){
           req.flash("success", "Welcome " + user.username);
           res.redirect("/data");
       });
   });
});

//Show Login page
router.get("/login", function(req, res){
    res.render("login")
});

//Login logic route
router.post("/login", passport.authenticate("local", 
    {
        successRedirect:"/data",
        failureRedirect:"/login"
    }), function(req, res){
});

//Logout Route
router.get("/logout", function(req, res){
    req.logout();
    req.flash("success", "You have been logged out!")
    res.redirect("/login");
});

module.exports = router;