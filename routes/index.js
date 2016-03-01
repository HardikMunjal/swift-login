var error = require('./error');

var team = require('./team');
var userInfo = require('./userInfo');

module.exports = function (app, passport) {




//Api's created for 
 app.get('/get/teams', team.get);
 app.get('/get/users', team.getUser);  
 app.post('/create/user', team.createUser);

 //Live APIS
 app.post('/v1/login', userInfo.validateLoginDetails, userInfo.getDetailsViaUserid, passport.authenticate('local'), userInfo.userDetailsResponse, error);


 app.get('/v1/validate/email',userInfo.validateExistenceOfEmail,error);
 app.get('/v1/validate/mobile',userInfo.validateExistenceOfMobile,error);
 app.post('/register/user', userInfo.validate, userInfo.saveUser);


 app.get('/get/user', isLoggedIn, userInfo.getRegistrationDetail, userInfo.saveUser);
 //app.get('/v1/user/:user_id',);          //if admin then check for query parameter , in case of admin send list of all user
 //app.post('/v1/user/:user_id',);         //if admin then check for query parameter
 //app.put('/v1/user',);                   //if admin then check for query parameter
 //app.delete('/v1/user/:user_id',);       //only for admin

 //app.get('/v1/user/:user_id/friend/',);  //status in query parameter to check for type of friend
 //app.post('/v1/user/:user_id/friend/:friend_id',);   //to remove friend from your list
 //app.put('/v1/user/:user_id/friend/:friend_id',);    //to create friend in you list

 //app.get('/v1/user/user:id/group/:group_id/',);  //return the list of users in specific group
 //app.post('/v1/user/:user_id/friend/:friend_id',);   //to remove friend from your list
 //app.put('/v1/user/:user_id/group/:group_id',);    //to create group of friend in your list

  //app.get('/v1/user/user:id/group/:group_id/',);  //return the list of users in specific group


  //app.get('/v1/group/:group_id');  //return the group details and their user details 


 

  

 //after creation i have to move this to frontend application
 app.get('/open/chat', function(req, res, next) {
			    res.render('chat.html');
			  });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    console.log(req.isAuthenticated());

    console.log(req.user);
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
