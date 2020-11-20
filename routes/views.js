var express = require('express');
var router = express.Router();

// ********************************************* SERVE VIEW FILES ********************************************* //

/* SHOW Home Page - Shows All Shows */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TV Shows Home Page', header: 'Welcome' });
});

// SHOW New/Create TV Show Page (Form)
// SHOW A Single TV Show Page
// SHOW A Update Single TV Show Page

module.exports = router;
