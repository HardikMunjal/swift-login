'use strict';

var team = {
get:function(req, res, next) {
  var data = { "records":[ {"Name":"Alfreds Futterkiste","City":"Berlin","Country":"Germany"}, {"Name":"Ana Trujillo Emparedados y helados","City":"México D.F.","Country":"Mexico"}, {"Name":"Antonio Moreno Taquería","City":"México D.F.","Country":"Mexico"}, {"Name":"Around the Horn","City":"London","Country":"UK"}, {"Name":"B's Beverages","City":"London","Country":"UK"}, {"Name":"Berglunds snabbköp","City":"Luleå","Country":"Sweden"}, {"Name":"Blauer See Delikatessen","City":"Mannheim","Country":"Germany"}, {"Name":"Blondel père et fils","City":"Strasbourg","Country":"France"}, {"Name":"Bólido Comidas preparadas","City":"Madrid","Country":"Spain"}, {"Name":"Bon app'","City":"Marseille","Country":"France"}, {"Name":"Bottom-Dollar Marketse","City":"Tsawassen","Country":"Canada"}, {"Name":"Cactus Comidas para llevar","City":"Buenos Aires","Country":"Argentina"}, {"Name":"Centro comercial Moctezuma","City":"México D.F.","Country":"Mexico"}, {"Name":"Chop-suey Chinese","City":"Bern","Country":"Switzerland"}, {"Name":"Comércio Mineiro","City":"São Paulo","Country":"Brazil"} ] }
  var records = data["records"];
  res.json(records);
},
getUser:function(req, res, next) {
	var nano = require('nano')('http://localhost:5984');
//nano.db.create('books');
var books = nano.db.use('swiftmkt');
//http://127.0.0.1:5984/swiftmkt/ff0b7301d3644d9289d3024b1a000648?revs_info=true
//console.log(books);
//Insert a book document in the books database
// books.insert({name: 'The Art of war'}, null, function(err, body) {
//   if (!err){
//     console.log(body);
//   }
// });

books.list(function(err, body)
{ 
	body.rows.forEach(function(getRev) { 
	
	var rev_id = body.rows[0].value;
	console.log(rev_id);
    })
})

books.get('ff0b7301d3644d9289d3024b1a000648', { revs_info: true }, function(err, body) {
  if (!err)
    console.log(body);


//Get a list of all books

//  books.list(function(err, body){
// //console.log(body.rows[0].value);
// body.rows.forEach(function(doc) {
//       console.log(doc);
//     });

res.json(body);
   //console.log(body.rows[0].value);
 });
},


createUser:function(req, res, next) {
  var nano = require('nano')('http://localhost:5984');
//nano.db.create('books');
var books = nano.db.use('swiftmkt');
//http://127.0.0.1:5984/swiftmkt/ff0b7301d3644d9289d3024b1a000648?revs_info=true
//console.log(books);
//Insert a book document in the books database
// books.insert({name: 'The Art of war'}, null, function(err, body) {
//   if (!err){
//     console.log(body);
//   }
// });

books.list(function(err, body)
{ 
  body.rows.forEach(function(getRev) { 
  
  var rev_id = body.rows[0].value;
  console.log(rev_id);
    })
})

console.log(req.body);

books.get('ff0b7301d3644d9289d3024b1a000648', { revs_info: true }, function(err, body) {
  if (!err)
    console.log(body);


//Get a list of all books

//  books.list(function(err, body){
// //console.log(body.rows[0].value);
// body.rows.forEach(function(doc) {
//       console.log(doc);
//     });

res.json(body);
   //console.log(body.rows[0].value);
 });
}
};
module.exports = team;