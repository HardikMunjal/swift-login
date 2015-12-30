var team = require('./team');
var userInfo = require('./userInfo');

module.exports = function (app) {


 app.get('/_status', function (req, res) {
			    res.write('OK');
			    res.status(200).send();
			  });
 app.get('/get/teams', team.get);
 app.get('/get/users', team.getUser);  
 app.post('/create/user', team.createUser);

 //Live APIS
 app.get('/register/user', userInfo.getRegistrationDetail, userInfo.validate, userInfo.saveUser);

};
