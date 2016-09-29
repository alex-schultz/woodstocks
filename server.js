
var express = require('express');
var app = express();

app.use('/static', express.static(__dirname + '/app'));


app.get('*', function (req, res) {
  res.sendFile(__dirname + '/app/index.html');
});

app.listen(3000, function() {
  console.log('Server is up and running on port 3000');
});
