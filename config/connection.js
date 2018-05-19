var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'us-cdbr-iron-east-04.cleardb.net',
    user: 'b5ec005821ef46',
    password: '3595aa0e',
    database: 'heroku_7af05b6f9f4a2a9'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected as id " + connection.threadId);
});

module.exports = connection;