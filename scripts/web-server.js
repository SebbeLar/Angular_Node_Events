var express = require('express'),
    path = require('path');

var app = express();
var rootPath = path.normalize(__dirname + '/../');

app.use(express.static(rootPath + '/app'));

app.listen(8000, function () {
  console.log('Server is up and running');
});
