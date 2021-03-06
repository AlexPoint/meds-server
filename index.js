// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

var connectionString = require('./config/connection-strings');
var mongoose   = require('mongoose');
var DrugGroup     = require('./src/models/drug');
mongoose.connect(connectionString); // connect to our database

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
    res.header("Access-Control-Allow-Origin", "*");
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
        var cb = function(err, drugGroups){
          if(err){
            res.send(err);
          }
          res.json(drugGroups);
        }
        if(req.query.name){
          DrugGroup.findByName(req.query.name, cb)
        }
        else if(req.query.drugName){
          DrugGroup.findByDrugName(req.query.drugName, cb)
        }
        else if(req.query.cis){
          DrugGroup.findByDrugCis(parseInt(req.query.cis), cb);
        }
        else {
          res.status(400).send('Missing arguments');
        }
    });

router.route('/drug')
  .get(function(req, res){
    var cb = function(err, drugs){
      if(err){
        res.send(err);
      }
      res.json(drugs);
    }
    
    DrugGroup.findDrugByName(req.query.name, cb)
  });

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);