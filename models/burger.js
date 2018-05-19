var orm = require("../config/orm.js");

var burgers = {
    burgers: function(cb) {
        orm.selectBurgers(function(res) {
            cb(res);
        });
    },
    newBurger: function(burgerName, cb) {
        orm.newBurger(burgerName, function(res){
            cb(res);
        });
    },
    devourBurger: function(id, cb) {
        orm.devourBurger(id, function(res){
            cb(res);
        });
    }
};

module.exports= burgers;