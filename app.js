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

	var nicknames=[];
	var io = require('socket.io').listen(server);

	io.sockets.on('connection', function(socket){
        console.log('socket connected');
		socket.on('new user',function(data, callback){
			var address = socket.handshake.address;
			if (nicknames.indexOf(data)!= -1){
				callback(false);
			}else{
				callback(true);
				//var dat = data + address;
				//data.append(address);
				socket.nickname = data;
				nicknames.push(socket.nickname);
	//io.sockets.emit('usernames',nicknames);
	updateNicknames();
	}
	});

	function updateNicknames(){
		var address = socket.handshake.address;
		console.log(address);
		console.log(nicknames);
		//nicknames.append(address);
		io.sockets.emit('usernames', {names : nicknames , address : address });
	}

	socket.on('send message',function(data){
		var address = socket.handshake.address;
		io.sockets.emit('new message', {msg: data , nick :socket.nickname });
        // socket.broadcast.emit('new message',data);
    });


    // ************ Start********* Node Main Code for socket **************** 

    socket.on('add name',function(data){
		var address = socket.handshake.address;
		console.log("mja aa gya" +data);
		//io.sockets.emit('new message', {msg: data , nick :socket.nickname });
        // socket.broadcast.emit('new message',data);
    });

    // ************ End*********** Node Main Code for socket **************** 


	socket.on('disconnect',function(data){
		if(!socket.nickname) return;
		nicknames.splice(nicknames.indexOf(socket.nickname),1);
		updateNicknames();

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



