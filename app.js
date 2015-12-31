var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var server = require('http').createServer(app);


server.listen(5000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
 });

// var server = app.listen(5000, function () {
//   var host = server.address().address;
//   var port = server.address().port;
//   console.log('Example app listening at http://%s:%s', host, port);
// });

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
	 console.log('a user connected');
     socket.on('send message',function(data){
        io.sockets.emit('new message', data);
       // socket.broadcast.emit('new message',data);
    });
}); 


app.use(require('./routes/corsheaders'));

//add body parser thing before router to parse data in req body.
app.use(bodyParser.json({
  limit: '10mb'
}));
app.use(router);
require('./routes')(router);

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


//asynchronus code ,default nature of node
// cors = require('./routes/corsheaders');
// app.use(cors());



