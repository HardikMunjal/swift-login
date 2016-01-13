var mysql = require('../config/mysql');

var addRegistrationDetail = {

 registerUser: function(options, cb) {
 
     var query = {
            sql: 'SELECT * FROM UserBasicInfo'
            }
     console.log('OKK H bhai');
     mysql.simpletrans(query, function(e, r) {
        if (e) {
            console.log('error is here');
            console.log(e);
        } else {
            console.log(r[0])
            cb(null,r);
        }
    });

 },

 registerUserDetails: function(options, cb)
 {

  console.log(options);
  
  var arr = ['INSERT INTO UserBasicInfo set first_name="haha1"','INSERT INTO UserBasicInfo set first_name="haha2"'];
  mysql.trans(arr, function(err, result) {
    cb(err, result);
  });
 }



};
module.exports = addRegistrationDetail;


   


