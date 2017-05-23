 // app/routes.js

// grab the data model we just created

var Data = require('./models/data');

    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        //var mongoose = require('mongoose');
        //mongoose.model('data', {name : String });

        app.get('/api/data', function(req, res) {
            // use mongoose to get all data in the database
            Data.find(function(err, stuff) {

                if (err)
                    res.send(err);

                res.json(stuff);
            });
        });

        // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendfile('./public/views/index.html'); // load our public/index.html file
        });

    };