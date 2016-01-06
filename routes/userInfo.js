'use strict';

//var mysql   = require('mysql');

var userInfo = {

	getRegistrationDetail : function(req, res, next){

        
		req.getConnection(function(err,connection) {

			var query = connection.query('SELECT * FROM UserBasicInfo',function(err,rows) {
			 	if(err)
					console.log("Error Selecting : %s ",err );

				res.json(rows);
			    });
            //console.log(query.sql);
         });

		// var connection = mysql.createConnection({
		//   host: 'localhost',
		//         user: 'root',
		//         password : 'root',
		//         port : 3306, //port mysql
		//         database:'swiftmkt'
		// });

		// connection.connect();
		// connection.query('SELECT * FROM UserBasicInfo', function(err, rows, fields) {
		//   if (err) throw err;

		//   console.log('The solution is: ', rows);
		// });
		// connection.end();
    },

    fetchDetails : function(req, res, next){

        
		req.getConnection(function(err,connection) {

			var query = connection.query('SELECT * FROM UserBasicInfo',function(err,rows) {
			 	if(err)
					console.log("Error Selecting : %s ",err );

				res.json(rows);
			    });
            //console.log(query.sql);
         });
    },

	validate : function(req, res, next){

		
        var userData = JSON.parse(JSON.stringify(req.body));
        userData.status = '1';
        userData.email = 'hardik.munjaal@gmail.com';
        userData.mobile = '9717060569';
		userData.created_at = '7656576';
		userData["updated_at"] = '8797898';
    
        req.getConnection(function (err, connection) {
        
        var data = {
            
            first_name : userData.first_name,
            last_name : userData.last_name,
            password : userData.password,
            email : userData.email,
            mobile : userData.mobile,
            gender : userData.gender,
            dob : userData.dob,
            status : userData.status,
            created_at : userData.created_at,
            updated_at : userData.updated_at
        
        };
        
        var query = connection.query("INSERT INTO UserBasicInfo set ? ",data, function(err, rows)
        {
  
          if (err)
              console.log("Error inserting : %s ",err );
         
          res.redirect('/get/user');
          
        });
        
       // console.log(query.sql); get raw query
    
    });

	},
	saveUser : function(req, res, next){

	}

};

module.exports = userInfo;