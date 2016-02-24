'use strict';

var userCrudModel = require('../model/addUser');

function getDateTime(date) {

    var date = date;

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();
    
    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + sec;
};

var userInfo = {


    validateLoginDetails : function(req, res, next){


        var loginData = req.body;

        if (!loginData || Object.keys(loginData).length === 0){
            var err = new Error('no login information sent');
            err.status=400;
            return next(err);
        }


        if ( (!loginData.email && !loginData.mobile) || !loginData.password){
            var err = new Error('login Details are missing');
            err.status=400;
            return next(err);
        }


        console.log(!loginData.email);
        

        if(!loginData.mobile){
            var data = {
                email : loginData.email,
                password : loginData.password
            };
           userCrudModel.validateLoginUserViaEmail(data, function(err, result) {

          if (err) {
            return next(err);
        }
              //res.json(result);
              console.log(result);
              if (!result[0] || Object.keys(result[0]).length === 0 || !result[0].user_id){
                var err = new Error('Sorry Your password or email is wrong');
                err.status=400;
                return next(err);
            }
            var user_id = result[0].user_id;

            req.body.user_id = user_id;
            delete req.body.password;

            return next();


        });


        }


    
     if(!loginData.email){
        var data = {
                mobile : loginData.mobile,
                password : loginData.password
            };
           userCrudModel.validateLoginUserViaMobile(data, function(err, result) {

          if (err) {
            return next(err);
        }
              //res.json(result);
              console.log(result);
              if (!result[0] || Object.keys(result[0]).length === 0 || !result[0].user_id){
                var err = new Error('Sorry Your password or mobiles is wrong');
                err.status=400;
                return next(err);
            }
            var user_id = result[0].user_id;

            req.body.user_id = user_id;
            delete req.body.password;

            return next();


        });
       }
        debugger;


       
    },

    getDetailsViaUserid : function(req, res, next){

        console.log(req.body);
        if (!req.body.user_id){
            var err = new Error('User_id is not preseent');
            err.status=400;
            return next(err);
        }
         var data = {
                user_id : req.body.user_id,
                status : 1
            };

        userCrudModel.fetchDetailsViaUserid(data, function(err, result) {

          if (err) {
            return next(err);
        }
        console.log(result);
        res.json(result);

    });
    },



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


   var userData = req.body;

   if (!userData || Object.keys(userData).length === 0){
    var err = new Error('no registeration information sent');
    err.status=400;
    return next(err);
}


if (!userData.first_name || !userData.last_name || !userData.email || !userData.mobile || !userData.gender || !userData.dob){
    var err = new Error('some parameters are missing');
    err.status=400;
    return next(err);
}

var currentDateTime = new Date();

userData.status = '1';
userData.created_at = getDateTime(currentDateTime);;
userData["updated_at"] = getDateTime(currentDateTime);;

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



userCrudModel.registerUserDetails(userData, function(err, result) {
  if (err) {
    return next(err);
}
res.json(result);

});

},
saveUser : function(req, res, next){

}

};

module.exports = userInfo;