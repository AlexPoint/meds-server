// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

var mongoose   = require('mongoose');
var DrugGroup     = require('./src/models/drug');
mongoose.connect('mongodb://meds:prouts@ds019143.mlab.com:19143/meds'); // connect to our database

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 9090;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:9090/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// on routes that end in /drugGroup/:drugGroup_id
// ----------------------------------------------------
router.route('/drugGroup')

    // get the drug with that id (accessed at GET http://localhost:9090/api/drugGroup/:drugGroup_id)
    .get(function(req, res) {
        DrugGroup.findOne({name: req.query.name}, function(err, drugGroup) {
            //console.log("Name param: " + req.query.name)
            if (err){
              res.send(err);
            }
            //console.log(drugGroups.length + " drug groups found");
            res.json(drugGroup);
        });
    });

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);