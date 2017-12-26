
var express = require('express');
var app = express();

app.use('/static', express.static(__dirname + '/app'));


app.get('*', function (req, res) {
  res.sendFile(__dirname + '/app/index.html');
});

app.listen(4000, function() {
  console.log('Server is up and running on port 4000');
});
