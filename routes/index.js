var team = require('./team');

module.exports = function (app) {


 app.get('/_status', function (req, res) {
			    res.write('OK');
			    res.status(200).send();
			  });
 app.get('/get/teams', team.get);

 app.get('/get/users', team.getUser);  

 app.post('/create/user', team.createUser);

 //app.get('/test', function(req, res, next) {
	//		    res.render('test.jade');
	//		  });

};
