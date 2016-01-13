var mysql = require('mysql');

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
      queries.forEach(function(q, queryIndex) {
        connection.query(q, function(err, result) {
          if(err) {
            connection.rollback(function() {
              console.log('err');
            });
            return fn(err, null);
          } else {
            if(!(queries[queryIndex + 1])) {
              connection.commit(function(err) {
                if (err) { 
                  connection.rollback(function() {
                    console.log('err');
                  });
                  fn(err,null);
                } else {
                  console.log('success! TRANSACTION COMPLETED SUCCESSFULLY');
                  return fn(err,'success');
                }
              });
            }
          }
        });
      });
    });
  }
}

