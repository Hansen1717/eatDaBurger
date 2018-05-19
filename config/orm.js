var connection =  require("../config/connection.js");

var orm = {
    selectBurgers:  function(cb) {
        var query = "SELECT * FROM burgers"
        
        connection.query(query, function(err, result){
            console.log(query);
            if (err) throw err;
            cb(result); 
        });
    },
    newBurger: function(burgerName, cb) {
        var query = "INSERT INTO burgers (burger_name) VALUES(?)"
        console.log(query);
        connection.query(query, burgerName, function(err, result){
            if (err) throw err
            cb(result)
        })
    },
    devourBurger: function(id, cb) {
        var query = "UPDATE burgers SET devoured = 1 WHERE id = " + id
        console.log(query);
        connection.query(query, function(err, result) {
            if (err) throw err
            cb(result)
        })
    }
};11

module.exports = orm;