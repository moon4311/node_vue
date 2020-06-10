var express = require('express');
var router = express.Router();

// middleware that is specific to this router

router.get('/', function(req, res,next) {
  console.log('//');
  res.location('/cms/login');
  next();
});

router.get('/login', function(req, res,next) {
  console.log('/login');
  res.send('login');
});

module.exports = router;