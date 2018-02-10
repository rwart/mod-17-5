
var express = require('express');
var app = express();

app.use('/store', function (req, res, next) {
  console.log('Jestem pośrednikiem przy żądaniu do /store');
  next();
});

app.get('/store', function (req, res) {
  res.send('To jest sklep');
  console.log('To jest sklep');
});

app.get('/', function (req, res) {
  res.send('Hello World');
  console.log('Hello World');
});

app.use(function (req, res, next) {
  var msg = 'request endpoint not supported: method: ' +
   req.method + ' url: ' + req.originalUrl;

  res.status(404).send(msg);
  console.log(msg);
});

var server = app.listen(3000, 'localhost', function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('()Przykładowa aplikacja nasłuchuje na http://' + host + ':' + port);
});
