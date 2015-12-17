var express = require('express');
var app = express();
var router = express.Router();


app.use(require('./routes/corsheaders'));
app.use(router);
require('./routes')(router);


//asynchronus code ,default nature of node
//cors = require('./routes/corsheaders');
//app.use(cors());

var server = app.listen(5000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
