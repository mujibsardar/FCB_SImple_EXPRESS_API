var express = require('express');
const fetch = require('node-fetch');
var router = express.Router();
const Show = require("./../models/Show");

// ********************************************* SERVE VIEW FILES ********************************************* //

/* SHOW Home Page - Shows All Shows */
router.get('/', function(req, res, next) {
  // Get all TV Shows from the Database the Show Model
  Show.find({}, function(err, shows) {
    if (err)
      res.send(err);
    // Success. We got data back.
    console.log(" ");
    console.log(" ");
    console.log("Shows returned from the database: " + JSON.stringify(shows));
    console.log(" ");
    console.log(" ");
    res.render('index', { title: 'TV Shows Home Page', header: 'Welcome' , shows: shows});
  });
});

// SHOW New/Create TV Show Page (Form)
// SHOW A Single TV Show Page
// SHOW A Update Single TV Show Page

module.exports = router;
