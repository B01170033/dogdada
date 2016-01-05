var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/Portfolio', function(req, res, next) {
  res.render('Portfolio', { title: 'Express' });
});
router.get('/About', function(req, res, next) {
  res.render('About', { title: 'Express' });
});
router.get('/Contact', function(req, res, next) {
  res.render('Contact', { title: 'Express' });
});

module.exports = router;
