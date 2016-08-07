var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
//var passport = require('passport');
//var LocalStrategy = require('passport-local').Strategy;

var server = require('http').createServer(app);

//***************MYSQL CONNECTION CONFIGURATION***************************
var connection  = require('express-myconnection'); 
var mysql = require('mysql');

// app.use(
//     connection(mysql,{
//         host: 'localhost',
//         user: 'root',
//         password : 'root',
//         port : 3306, //port mysql
//         database:'swiftmkt'
//        },'pool') //or single
//   );


server.listen(6000, function () {
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


    // ************ Start ********* Node Main Code for socket **************** 

    socket.on('add name',function(data){
		var address = socket.handshake.address;
		console.log("mja aa gya" +data);
		//io.sockets.emit('new message', {msg: data , nick :socket.nickname });
        // socket.broadcast.emit('new message',data);
    });

    // ************ End *********** Node Main Code for socket **************** 


	socket.on('disconnect',function(data){
		if(!socket.nickname) return;
		nicknames.splice(nicknames.indexOf(socket.nickname),1);
		updateNicknames();

	});   
});



app.use(require('./routes/corsheaders'));


//*****************************CRON Execution Code*******************************************
var cron = require('./crons/fantasyCricketNotifier/teamMailer.js');
cron();

//require('./config/passport')(passport);

//add body parser thing before router to parse data in req body.
app.use(bodyParser.json({
	limit: '10mb'
}));
app.use(cookieParser());
app.use(expressSession({
	secret:'secret',
	resave: false,
   saveUninitialized: true,
  cookie: { 
  	 maxAge: 600000, 
 //  	secure: true ,
     httpOnly: false, // key
 //    maxAge: null
   }
}));



// passport.use('local',new LocalStrategy({
//         // by default, local strategy uses username and password, we will override with email
//         usernameField : 'email',
//         passwordField : 'password',
//         passReqToCallback : true // allows us to pass back the entire request to the callback
//     },function(req,email, password, done){

// 	console.log('atleast coming here');

// 	console.log(req.body);

// 	//console.log(user_id);
// 	//console.log(password);
// 	if (email === 'hardik.polestar@paytm.com'){
// 		done(null,{id:email,name:email});
// 	}else{
// 		done(null,null);
// 	}
// }));

// passport.serializeUser(function(user, done) {

//   done(null, user.id);
// });

// passport.deserializeUser(function(id, done) {
//   User.findById(id, function (err, user) {
//     done(err, user);
//   });
// });

// app.use(passport.initialize());
// app.use(passport.session());



app.use(router);
require('./routes')(router);
//require('./routes')(router,passport);

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


//asynchronus code ,default nature of node
// cors = require('./routes/corsheaders');
// app.use(cors());