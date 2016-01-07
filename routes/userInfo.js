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
    			email : userData.email,
    			mobile : userData.mobile,
    			gender : userData.gender,
    			dob : userData.dob,
    			status : userData.status,
    			created_at : userData.created_at,
    			updated_at : userData.updated_at
       		};

    		var transaction = connection.beginTransaction(function(err) {
    			if (err) { throw err; }
    			var query=connection.query("INSERT INTO UserBasicInfo set ? ",data, function(err, result) {
    				if (err) { 
    					connection.rollback(function() {
    						throw err;
    					});
    				}
    				console.log(query.sql);

    				var log = 'Post ' + result.insertId + ' added';
    				console.log(log);

    				var data2 = {
    					email : userData.email,
    					password : userData.password,
    					mobile : userData.mobile,
    					user_id : result.insertId,
    					last_updated_by : 'user',
    					created_at : userData.created_at,
    					updated_at : userData.updated_at

    				};
    				console.log(data2);

    				var queryx=connection.query('INSERT INTO UserCredential SET ?', data2, function(err, result) {
    	//var log2 = 'Post ' + result.insertId + ' added';
    	//console.log(log2);
    	if (err) { 
      	//console.log(err);
      	connection.rollback(function() {
      		throw err;
      	});
      }  
      connection.commit(function(err) {
      	if (err) { 
      		connection.rollback(function() {
      			throw err;
      		});
      	}
      	console.log('success!');
      });
  });
    				console.log(queryx.sql);

    			});
});



        // var query = connection.query("INSERT INTO UserBasicInfo set ? ",data, function(err, rows)   {
        //   if (err)
        //       console.log("Error inserting : %s ",err );

        //    console.log(rows.insertId);
        //   res.redirect('/get/user');
        // });

       // console.log(query.sql); get raw query
       

   });

},
	saveUser : function(req, res, next){

	}

};

module.exports = userInfo;