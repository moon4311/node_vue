var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', function(req, res) {
  console.log('//');
  res.send('main');
});

router.get('/login', function(req, res) {
  console.log('/login');
  res.send('login');
});

module.exports = router;