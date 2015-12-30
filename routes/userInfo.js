'use strict';
 //var mysql = '../confif/mysql';

var mysql      = require('mysql');

var userInfo = {

	getRegistrationDetail : function(req, res, next){

		var connection = mysql.createConnection({
		  host: 'localhost',
		        user: 'root',
		        password : 'root',
		        port : 3306, //port mysql
		        database:'swiftmkt'
		});

		connection.connect();
		connection.query('SELECT * FROM UserBasicInfo', function(err, rows, fields) {
		  if (err) throw err;

		  console.log('The solution is: ', rows);
		});
		connection.end();
    },
validate : function(req, res, next){

},
saveUser : function(req, res, next){

}

};

module.exports = userInfo;