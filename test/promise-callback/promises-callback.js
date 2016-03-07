var Q = require('q');




var numberGenerator = function(){

var deferred = Q.defer();

        var number = '6';
        if (number == '6') {
            deferred.resolve(number);
        }
        else {
            deferred.reject("this is fucking number ,which cant be returned");
        }

        //deferred.promise.nodeify(callback);
        return deferred.promise;
}

numberGenerator()
.then(function (result) {
    // result returns "John Doe"
    console.log(result);
})
.fail(function (error) {
    // error returns error message if either first or last name are null or undefined
    console.log('ssssssssssygvjshhs');
});

module.exports = {
    getFullName: function (firstName, lastName, callback) {
        var deferred = Q.defer();

        if (firstName && lastName) {
            var fullName = firstName + " " + lastName;
            deferred.resolve(fullName);
        }
        else {
            deferred.reject("First and last name must be passed.");
        }

        //deferred.promise.nodeify(callback);
        return deferred.promise;
    }
}