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


  validateExistenceOfEmail : function(req, res, next){


    if (!req.query.email){
      var err = new Error('no email_id sent');
      err.status=400;
      return next(err);
    }

    console.log(req);
    console.log(req.headers.origin);
    
    var email = req.query.email;
    var data ={
      email : email
    }
    userCrudModel.validateExistenceOfEmail(data, function(err, result) {

    if (err) {
      return next(err);
    }
    res.json(result);

  });
  },

  validateExistenceOfMobile : function(req, res, next){


    if (!req.query.mobile){
      var err = new Error('no mobile.no sent');
      err.status=400;
      return next(err);
    }
    
    var mobile = req.query.mobile;
    var data ={
      mobile : mobile
    }
    userCrudModel.validateExistenceOfMobile(data, function(err, result) {

    if (err) {
      return next(err);
    }
    res.json(result);

  });
  },


  validateLoginDetails : function(req, res, next){


    var loginData = req.body;

    console.log(req.user);

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


//*********** Create seperate function to remove duplicasy for both mobile and email**********************

  var LoginValidationCallbackForMobileEmail = function(err, result) {

    if (err) {
      return next(err);
    }
    var sqlResponse = result[0];
    if (!sqlResponse || Object.keys(sqlResponse).length === 0 || !sqlResponse.user_id){
      var err = new Error('Sorry Your Credentials are wrong');
      err.status=400;
      return next(err);
    }
    var user_id = sqlResponse.user_id;

    req.body.user_id = user_id;
    //delete req.body.password;

    return next();
  }
//**********************************************************************************************************        

 if(!loginData.mobile){
  var data = {
    email : loginData.email,
    password : loginData.password
  };
  userCrudModel.validateLoginUserViaEmail(data, LoginValidationCallbackForMobileEmail);


}


if(!loginData.email){
  var data = {
    mobile : loginData.mobile,
    password : loginData.password
  };
  userCrudModel.validateLoginUserViaMobile(data, LoginValidationCallbackForMobileEmail);
}
},


getDetailsViaUserid : function(req, res, next){

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
    req.body.user_data = result;
    delete req.body.user_id;
    //res.json(result);
    next();

  });
},

userDetailsResponse : function (req, res, next){
  if (!req.body.user_data){

  }
  res.json(req.body.user_data);
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