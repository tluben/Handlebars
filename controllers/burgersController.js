var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/",function(req, res){
  res.redirect("/burgers")
})

// Create all our routes and set up logic within those routes where required.
router.get("/burgers", function(req, res) {
  burger.all(function(burgerData) {
    res.render("index",{burger_data: burgerData});
  });
});

router.post("/burgers/create", function(req, res) {
  burger.create(req.body.burger_name, function(result){
    res.redirect("/")
    });
  });

router.put("/burgers/:id", function(req, res) {
  console.log(req.params)

  burger.update(req.params.id, function(result){
    console.log(result)
    res.sendStatus(200)
  })
})
  
module.exports = router;
