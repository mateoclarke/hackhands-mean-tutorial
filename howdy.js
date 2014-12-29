var port = 1337;
var express = require('express');
 
var nameExists = function(req, res, next) {
      if (req.param('name')) {
            next();
      }
      else {
            res.send('What is your name?');
      }
};
 
var sayHowdy = function(req, res, next) {
      res.send('Howdy ' + req.param('name'));
};
 
var app = express();
 
app.get('/', nameExists, sayHowdy);
 
app.listen(port);
 
console.log('Server running at http://localhost:' + port);