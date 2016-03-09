var mysql = require('../config/mysql');

var addRegistrationDetail = {

 registerUser: function(options, cb) {
 
     var query = {
            sql: 'SELECT * FROM UserBasicInfo'
            }
     mysql.simpletrans(query, function(e, r) {
        if (e) {
            console.log(e);
        } else {
            console.log(r[0])
            cb(null,r);
        }
    });

 },

 validateExistenceOfEmail: function(options, cb) {
 
     var query = {
            sql: 'SELECT COUNT(*) as total FROM UserCredential WHERE email = ?',
            values:[options.email]
            }
            console.log(query.sql);
            console.log(query.values);
     mysql.simpletrans(query, function(e, r) {
        if (e) {
            console.log(e);
            cb(e);
        } else {
            console.log(r[0])
            cb(null,r);
        }
    });

 },

 validateExistenceOfMobile: function(options, cb) {
 
     var query = {
            sql: 'SELECT COUNT(*) as total FROM UserCredential WHERE mobile = ?',
            values:[options.mobile]
            }
            console.log(query.sql);
            console.log(query.values);
     mysql.simpletrans(query, function(e, r) {
        if (e) {
            console.log(e);
            cb(e);
        } else {
            console.log(r[0])
            cb(null,r);
        }
    });

 },



 validateLoginUserViaEmail: function(options, cb) {
 
     var query = {
            sql: 'SELECT user_id FROM UserCredential where email=? and password =?',
            values:[options.email,options.password]
            }
            console.log(query.sql);
            console.log(query.values);
     mysql.simpletrans(query, function(e, r) {
        if (e) {
            console.log(e);
            cb(e);
        } else {
            console.log(r[0])
            cb(null,r);
        }
    });

 },



 validateLoginUserViaMobile: function(options, cb) {
 
     var query = {
            sql: 'SELECT user_id FROM UserCredential where mobile=? and password =?',
            values:[options.mobile,options.password]
            }
            console.log(query.sql);
            console.log(query.values);
     mysql.simpletrans(query, function(e, r) {
        if (e) {
            console.log(e);
            cb(e);
        } else {
            console.log(r[0])
            cb(null,r);
        }
    });

 },

fetchDetailsViaUserid: function(options, cb) {
 
     var query = {
            sql: 'SELECT * FROM UserBasicInfo where user_id =?',
            values:[options.user_id]
            }
            console.log(query.sql);
            console.log(query.values);
     mysql.simpletrans(query, function(e, r) {
        if (e) {
            console.log(e);
            cb(e);
        } else {
            console.log(r[0])
            cb(null,r);
        }
    });

 },

 registerUserDetails: function(options, cb)
 {

  var arr = [ {
    sql: 'INSERT INTO UserBasicInfo(first_name, last_name, email, mobile, gender, dob, status, created_at, updated_at) values(?,?,?,?,?,?,?,?,?)',
    values: [options.first_name, options.last_name, options.email, options.mobile, options.gender, options.dob, options.status, options.created_at, options.updated_at]
  },
  {
    sql: 'INSERT INTO UserCredential(email, password, mobile, user_id, last_updated_by, created_at, updated_at) values(?,?,?,?,?,?,?)',
    values: [options.email, options.password, options.mobile, 'user_id', options.last_updated_by, options.created_at, options.updated_at],
    replacer : 'user_id'
  },
  {
    sql: 'INSERT INTO UserPermissionRole(user_id, role_id) values(?,?)',
    values: ['user_id', 3],
    replacer : 'user_id'
  }
  ];
  mysql.transDynamicCallbackWay(arr, function(err, result) {
    cb(err, result);
  });
 }



};
module.exports = addRegistrationDetail;


   


