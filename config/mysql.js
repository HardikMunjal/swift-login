var mysql = require('mysql');

var connection = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
        user: 'root',
        password : 'root',
        port : 3306, //port mysql
        database:'swiftmkt'
});

connection.on('error', function(err) {
  console.log(err);
  //console.log(connection);
  connection.destroy();
  //console.log(connection);
});

module.exports = function(query, fn) {
  connection.query(query, fn);
}