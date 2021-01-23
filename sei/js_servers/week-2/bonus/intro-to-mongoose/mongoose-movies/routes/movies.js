var express = require('express');
var router = express.Router();
const moviesCtrl = require('../controllers/movies');
const Movie = require('../models/movie');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router.get('/new', moviesCtrl.new);

router.post('/', moviesCtrl);

module.exports = router;
