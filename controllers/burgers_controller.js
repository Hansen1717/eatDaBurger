var app = require("express");
var router = app.Router();
var burgers = require("../models/burger.js");

router.get("/", function(req, res) {
    burgers.burgers(function(data) {
        var hbsObject = {
            uneatenBurgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burgers.newBurger([req.body.burgerName], function(result) {
        res.json({id: result.insertId})
    });
});

router.put("/api/burgers/:id", function(req,res){
    burgers.devourBurger(req.params.id,function(result) {
        if (result.rowsChanged == 0) {
            return res.status(404).end();
        }
        else {
            return res.status(200).end();
        };
    });
});

module.exports = router;