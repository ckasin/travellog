const express = require('express');
const app = express(); //server-app

app.get('/', function (req, res) {

  //set headers
  res.set('Access-Control-Allow-Origin', '*');
  res.set("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");

  //set statusline and body - and send
  res.status(200).send('Hello World!'); //status-line and body

});

var port = process.env.PORT || 3000;

app.listen(port, function () {
  //console.log('Server listening on port 3000!');
});
