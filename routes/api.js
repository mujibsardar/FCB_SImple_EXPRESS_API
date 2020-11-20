var express = require('express');
var uniqid = require('uniqid');

var router = express.Router();

// show --> {id: 0, title: "title", platform: "platform", releaseYear: year, image: "image"}
let shows = [];

// ********************************************* SHOWS API (CRUD) ********************************************* //

// CREATE
router.post('/', function(req, res, next) {
  // Extract new show info from body
  let newShow = req.body;
  // Generate id for this new show
  newShow.id = uniqid();
  // Add new show to shows
  shows.push(newShow);
  // Send back new show
  res.send({message: "Success"});
});

// READ - ALL SHOWS
router.get('/', function(req, res, next) {
  res.send(shows);
});

// READ - SINGLE SHOW
router.get('/show/:id', function(req, res, next) {
  // 1) Find the show in the shows array
  let id = req.params.id;
  let show;
  for(let i = 0; i < shows.length; i++){
    if(shows[i].id == id){
      show = shows[i];
    }
  }
  // 2) Send back the show that we found
  res.send(show);
});

// UPDATE
router.put('/show/:id', function(req, res, next) {
  // 1) Extract all the info about the show
  let id = req.params.id;
  let title = req.body.title;
  let platform = req.body.platform;
  let releaseYear = req.body.releaseYear;
  let image = req.body.image;
  // 2) Create new updated show info
  let updatedShow = {id: id, title: title, platform: platform, releaseYear: releaseYear, image: image};
  // 3) Find the show based on id
  for(let i = 0; i < shows.length; i++){
    if(shows[i].id == id){
      shows[i] = updatedShow;
    }
  }
  res.send(updatedShow);
});

// DELETE
router.delete('/show/:id', function(req, res, next) {
  // 1) Extract all the info about the show
  let id = req.params.id;
  // 2) Find the show based on id
  for(let i = 0; i < shows.length; i++){
    if(shows[i].id == id){
      // NOW DELETE THE SHOW FROM THE SHOWS ARRAY
      shows.splice(i, 1);
    }
  }
  res.send(shows);
});

module.exports = router;
