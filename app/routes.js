 // app/routes.js

var Data = require('./models/data');

    module.exports = function(app) {

        // server routes ===========================================================

        app.get('/api/data', function(req, res) {
            // use mongoose to get all data in the database
            Data.find(function(err, data) {

                if (err)
                    res.send(err);

                res.json(data);
            });
        });

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendfile('./public/views/index.html'); // load our public/index.html file
        });

    };