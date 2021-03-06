// server.js

// Modules ==============================
var express        = require('express');
var mongoose       = require('mongoose');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// configuration ==============================

// set our port
var port = process.env.PORT || 8000; 

// connect to our mongoDB database 
mongoose.connect('mongodb://localhost:27017/test');

// get all data/stuff of the body (POST) parameters
// parse application/json 
app.use(bodyParser.json()); 

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override')); 

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public')); 

// routes ==============================
require('./app/routes')(app);

app.listen(port);                         
console.log('Started server on port: ' + port);
exports = module.exports = app;