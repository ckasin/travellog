const express = require('express');
const app = express(); //server-app

// global for all routes -------------------------
app.use(function(req, res, next) {



    res.set('Access-Control-Allow-Origin', '*');
    res.set("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    next(); //go to the specified route
});

// -----------------------------------------------
//route handling is delegated to:
var travels = require('./travels.js');
app.use('/travellog/travels/', travels);

//Not yet implemented:
//var users = require('./users.js');
//app.use('/travellog/users/', users);

var port = process.env.PORT || 3000;

//------------------------------------------------
app.listen(port, function () {
  //console.log('Server listening on port 3000!');
});
