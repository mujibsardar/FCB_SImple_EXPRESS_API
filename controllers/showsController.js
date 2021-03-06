let mongoose = require('mongoose');
// Unique Id Generator
var uniqid = require('uniqid');
// Import TV Show Model
const Show = require("./../models/Show");

// Create New Show
exports.create_show = function(req, res) {
  // Create new TV Show Object using the incoming data
  let new_tv_show = new Show(req.body);
  // Assign a unique ID to this object
  new_tv_show.id = uniqid();
  // Now save the object into the Database
  new_tv_show.save(function(err, created_tv_show) {
    // If there is an error send back the error object
    if (err)
      res.send(err);
    // Otherwise send back the new tv show object
    res.json(new_tv_show);
  });
};

// Get All Shows
exports.list_shows = function(req, res) {
  Show.find({}, function(err, shows) {
    if (err)
      res.send(err);
    res.json(shows);
  });
};

// Get Single Show
exports.get_show = function(req, res) {
  let id = req.params.id;
  Show.find({_id:id}, function(err, show) {
    if (err)
      res.send(err);
    res.json(show);
  });
};

// Update Single Show
exports.update_show = function(req, res) {
  let id = req.params.id;
  Show.findOneAndUpdate({_id:id}, req.body, function(err, show) {
    if (err)
      res.send(err);
    res.json(show);
  });
};

// Delete Show
exports.delete_show = function(req, res) {
  let id = req.params.id;
  Show.deleteOne({_id:id}, function(err, data) {
    if (err)
      res.send(err);
    res.send({Message: "Success", data: data});
  });
};

// Delete All Shows
exports.delete_shows = function(req, res) {
  Show.deleteMany({}, function(err, data) {
    if (err)
      res.send(err);
    res.send({Message: "Success", data: data});
  });
};
