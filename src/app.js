var express = require('express');
var cms = require('./router/cms');
var app = express();

/* https://expressjs.com/ko/guide/routing.html */

/* get, post, put, head, delete, options, trace, copy, lock, mkcol, move,
 purge, propfind, proppatch, unlock, report, mkactivity, checkout, merge, 
 m-search, notify, subscribe, unsubscribe, patch, search 및 connect. */


//로깅
 var myLogger = function (req, res, next) {
  console.log('LOGGED : ', Date.now());
  next();
};



app.all('/',function(req,res,next){
  res.send("node_vue를 만들겁니다.");
});

// 정적 파일
//app.use('/static',express.static(__dirname + '/public'));  //   :3000/static/images -> /public/images
app.use(myLogger);


app.use('/cms',cms);


app.listen(3000, function () {
  console.log('Listening on port 3000!');
});