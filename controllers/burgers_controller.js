// Dependencies
var express = require("express");
var router = express.Router();

// Create the router for the app, and export the router at the end of your file.
var burger = require("../models/burger.js");
// Create routes and logic witin those routes where required
router.get("/", function(req, res){
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});
// Add new burger to the db
router.post("/api/burgers", function(req, res){
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result){
        res.json({id: result.insertId});
    });
});
// set devoured status to true
router.put("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({ 
        devoured: req.body.devoured 
    }, condition, function(result){
        if(result.changedRows === 0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
// Delete da burger
router.delete("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;

    burger.deleteOne(condition, function(result){
        if(result.changedRows === 0) {
            return res.status(404).end();
        }else{
            res.status(200).end();
        }
    });
});

module.exports = router;




module.exports = router;