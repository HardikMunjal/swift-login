'use strict';

var userCrudModel = require('../model/addUser');

var userInfo = {

	getRegistrationDetail : function(req, res, next){

         var options='hardik';
         userCrudModel.registerUser(options, function(err, result) {
          if (err) {
            return next(err);
          }
          res.json(result);
         
        });
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
    	//userData.email = 'hardik.munjaal@gmail.com';
    	//userData.mobile = '9717060569';
    	userData.created_at = '7656576';
    	userData["updated_at"] = '8797898';

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


            //registerUserDetails(gfucy, function(err,result))
            userCrudModel.registerUserDetails(userData, function(err, result) {
              if (err) {
                return next(err);
              }
              res.json(result);
             
            });

    	/*req.getConnection(function (err, connection) {

    		

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

    				var user_id = result.insertId;

    				var data2 = {
    					email : userData.email,
    					password : userData.password,
    					mobile : userData.mobile,
    					user_id : user_id,
    					last_updated_by : 'user',
    					created_at : userData.created_at,
    					updated_at : userData.updated_at

    				};
    				console.log(data2);

    				var query2=connection.query('INSERT INTO UserCredential SET ?', data2, function(err, result) {
    	
				    	if (err) { 
				      	connection.rollback(function() {
				      		throw err;
				      	});
				      }  
                  });
    				console.log(query2.sql);

//*********** role_id :1 ===== User_pr1 *************Default Permission for all new user***********************

    				var data3 = {
    					
    					user_id : user_id,
    					role_id : '1'

    				};

    				var query3=connection.query('INSERT INTO UserPermissionRole SET ?', data3, function(err, result) {
    	
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
			          console.log('success! TRANSACTION COMPLETED SUCCESSFULLY');
			          });
                  });

    			});
             });

     res.json('Records inserted REspectively');

   });*/

},
	saveUser : function(req, res, next){

	}

};

module.exports = userInfo;