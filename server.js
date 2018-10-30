var path = require("path");
var bodyParser = require("body-parser");
var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

// Expose the public directory
app.use(express.static(path.join(__dirname, './app/public')));

// Add the application routes
require( './app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

