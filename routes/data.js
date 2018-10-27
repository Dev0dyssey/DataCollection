var express =require("express");
var router = express.Router();
var client = require("../models/client")
var middleware = require("../middleware")

//NEW ROUTE
router.get("/new", middleware.isLoggedIn, function(req, res){
    res.render("new");
})

//CREATE ROUTE
router.post("/", middleware.isLoggedIn, function(req, res){
    client.create(req.body.capture, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.redirect("/");
        }
    });
});

//SHOW ROUTE
router.get("/:id", middleware.isLoggedIn, function(req, res) {
   client.findById(req.params.id, function(err, customerInfo){
       if(err){
           res.redirect("/data");
       } else {
           res.render("show", {client: customerInfo});
       }
   }); 
});

//EDIT ROUTE
router.get("/:id/edit", middleware.isLoggedIn, function(req, res) {
   client.findById(req.params.id, function(err,customerInfo){
       if(err){
           res.redirect("/data");
       } else {
           res.render("edit", {client: customerInfo});
       }
   }); 
});

//UPDATE ROUTE
router.put("/:id", middleware.isLoggedIn, function(req, res){
   client.findByIdAndUpdate(req.params.id, req.body.capture, function(err, updatedData){
       if(err){
           res.redirect("/data");
           console.log(err);
       } else {
           res.redirect("/data/" + req.params.id);
           console.log("Updated!");
       }
   }); 
});

//DELETE ROUTE
router.delete("/:id", middleware.isLoggedIn, function(req, res){
    client.findByIdAndRemove(req.params.id, function(err){
        if(err){
            console.log("Error!");
        } else {
            res.redirect("/data");
        }
    });
});


//Middleware for loggedin user



module.exports = router;