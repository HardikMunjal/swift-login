var error = require('./error');

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
 app.post('/v1/login', userInfo.validateLoginDetails, userInfo.getDetailsViaUserid,error);
 app.get('/v1/validate/email',userInfo.validateExistenceOfEmail,error);
 app.get('/v1/validate/mobile',userInfo.validateExistenceOfMobile,error);
 app.get('/get/user', userInfo.getRegistrationDetail, userInfo.saveUser);
 app.post('/register/user', userInfo.validate, userInfo.saveUser);


 //after creation i have to move this to frontend application
 app.get('/open/chat', function(req, res, next) {
			    res.render('chat.html');
			  });
};
