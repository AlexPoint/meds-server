// import _ from 'underscore';
// import * as drugParser from './src/drug-parser';
// import * as drugGroupBuilder from './src/drug-groups-builder';
// import * as connector from './src/connector';
var Sequelize = require('Sequelize');
//var Drug = require('../../models/drug').Drug;

var db = new Sequelize('meds', 'root', 'Yatetil2', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

var Drug = db.import(__dirname + '/../../models/Drug');

db.authenticate()
  .then(function(err){
    Drug.create({name: 'test'}).then(function(){
      console.log("Drug created!")
    })
    // drugParser.parseGenericGroups(function(genericGroups){
     // drugParser.parseDrugs(function(drugs){
     //   drugParser.parseCompositions(function(compositions){
     //     drugParser.parsePresentations(function(presentations){

     //       console.log("# generic groups: %s", genericGroups.length);
     //       console.log("# drugs: %s", drugs.length);
     //       console.log("# compositions: %s", compositions.length);
     //       console.log("# presentations: %s", presentations.length);

     //       var groups = drugGroupBuilder.buildGroups(genericGroups, drugs, compositions, presentations);
     //       console.log(groups.length  + " groups found");
     //       console.log(JSON.stringify(groups[0], null, 2));

     //       connector.insert('genericgroups', groups);
     //       console.log("groups inserted in db");
     //     })
     //   })
     // })
    // })

  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });