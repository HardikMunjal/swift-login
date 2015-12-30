var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var connection  = require('express-myconnection'); 
var mysql = require('mysql');


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

// app.use(
//       connection(mysql,{
//         host: 'localhost',
//         user: 'root',
//         password : 'root',
//         port : 3306, //port mysql
//         database:'swiftmkt'
//     },'request')
// );

var server = app.listen(5000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
