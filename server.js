var express = require("express");
var bprs = require("body-parser");

var PORT = process.env.PORT || 8085;

var app = express();

app.use(express.static("public"));

app.use(bprs.urlencoded({extended: true}));

app.use(bprs.json());

var hndlbrs = require("express-handlebars");

app.engine("handlebars", hndlbrs({defaultLayout: "main"}))
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening on : http://localhost:" + PORT);
})

