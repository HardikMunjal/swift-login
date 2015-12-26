var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');


app.use(require('./routes/corsheaders'));
//add body parser thing before router but y?
app.use(bodyParser.json({
  limit: '10mb'
}));
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
