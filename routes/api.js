var express = require('express');
var uniqid = require('uniqid');
let mongoose = require('mongoose');

// Import TV Show Model
const Show = require("./../models/Show");

// Shows Controller
const showsCtrl = require('../controllers/showsController');

// Instatiate Express Router
var router = express.Router();

// show --> {id: 0, title: "title", platform: "platform", releaseYear: year, image: "image"}

// ********************************************* SHOWS API (CRUD) ********************************************* //

// CREATE
// POST CALL to localhost:3000/api
router.post('/', showsCtrl.create_show);

// READ - All Shows
router.get('/', showsCtrl.list_shows);

// READ - Single Show
router.get('/show/:id', showsCtrl.get_show);

// UPDATE Single Show
router.put('/show/:id', showsCtrl.update_show);

// DELETE Single Show
router.delete('/show/:id', showsCtrl.delete_show);

// DELETE - Delete All Shows
router.delete('/', showsCtrl.delete_shows);

module.exports = router;
