var mysql = require('mysql');
var async = require('async');

//*************Currently not in use*********************
var connection = mysql.createConnection({
  connectionLimit: 10,
    host: 'localhost',
            user: 'root',
            password : 'root',
            port : 3306, //port mysql
            database:'swiftmkt'
});

console.log('coming here');

connection.on('error', function(err) {
  console.log(err);
  //console.log(connection);
  connection.destroy();
  //console.log(connection);
});

module.exports = {
  simpletrans: function(query, fn) {
    connection.query(query, fn);
  },
  trans: function(queries, fn) {
    connection.beginTransaction(function(err) {
        async.each(queries, function(query,next) {
          connection.query(query, function(err, result) {
            if(err) {
              next(err);
            } else {
              var log = 'Post ' + result.insertId + ' added';
              console.log(log);
              next(); 
            }
          });
        },function(err) {
          if(err) {
            connection.rollback(function() {
                throw err;
            });
            fn(err,null);
          }
        });
        connection.commit(function(err) {
          if (err) { 
            connection.rollback(function() {
              throw err;
            });
            fn(err,null);
          } else {
            console.log('success! TRANSACTION COMPLETED SUCCESSFULLY');
            fn(err,'success');
          }
      });
    });
  }
}
