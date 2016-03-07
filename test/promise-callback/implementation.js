var DualModule = require('./promises-callback.js');

DualModule.getFullName("John", "Doe")
.then(function (result) {
    // result returns "John Doe"
    console.log('sygvjshhs');
})
.fail(function (error) {
    // error returns error message if either first or last name are null or undefined
    console.log('ssssssssssygvjshhs');
});



DualModule.getFullName("John", "Doe", function (error, result) {
    // error returns error message if either first or last name are null or undefined   
    // result returns "John Doe"
    console.log('john doe');
});