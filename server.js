var express = require('express')
var server = require('http').createServer(app);
var port = process.env.PORT || 3000;
var app = express();


require('./config/middleware.js') (app,express); 
require('./config/routes.js') (app,express); 


app.listen(port, function () {
  console.log(' app listening on port '+ port);
})