var express = require('express');
var cms = require('./router/cms');
var app = express();


app.use('/cms',cms);
app.listen(3000, function () {
  console.log('Listening on port 3000!');
});


