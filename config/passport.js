



// config/passport.js

// load all the things we need
var passportLocal   = require('passport-local');

// load up the user model
//var User            = require('../app/models/user');

// expose this function to our app using module.exports
module.exports = function(passport) {



passport.use(new passportLocal.Strategy(function(username, password, done){

	console.log(username);
	console.log(password);
	if (username === password){
		done(null,{id:username,name:username});
	}else{
		done(null,null);
	}
}));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});



};