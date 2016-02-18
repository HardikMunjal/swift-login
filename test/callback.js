//**************** Callback way of defiining function

var fs = require("fs");





function some_function(arg1, arg2, callback) {

 console.log("hello");
    var my_number = Math.ceil(Math.random() *

        (arg1 - arg2) + arg2);

       // callback(my_number);
}

some_function(5, 15, function(num) {

      console.log("callback called! " + num);
});
console.log('that is real feature');









getData('5','4', writeData);

console.log('show this before get data');

function getData(arg1,arg2, callback) {
    var my_number = getSomeData(); // fake function
    //callback(myData);


   callback(my_number);

}

function writeData(myData) {
    console.log('le bhai');
    console.log(myData);
}

function getSomeData() {
  // this would make an XHR connection to the server and get, say, some JSON back




  var data =  Math.ceil(Math.random() *

        (5 - 4) + 4);;
  return data;
}









function some_function1(arg1, arg2) {


    var my_number = Math.ceil(Math.random() *

        (arg1 - arg2) + arg2);

    return my_number;

}




var num = some_function1(5, 15);
console.log("callback called! " + num);








function subtract(a,b,callback){
    process.nextTick(function() {
      //  console.time('for loop');
   /* for(i=0; i<999999; i++) {
        for(j=0; j<9999; j++) {}
    }*/
    //console.endTime('for loop');
    callback("abcd");
    }); 
   
}

subtract(5,1,function(result) {
  
    console.log(result);
});
console.log('chii');

function print(subtractedValue){

    var data = fs.readFileSync('../../../seedapi');


    var ss = subtractedValue*6;
    console.log(ss);
}

function x(print){
    console.log(print);
}





function someAction(x, y, someCallback) {
    return someCallback(x, y);
}

function calcProduct(x, y) {
    return x * y;
}

function calcSum(x, y) {
    return x + y;
}
// alerts 75, the product of 5 and 15
console.log(someAction(5, 15, calcProduct));
// alerts 20, the sum of 5 and 15

console.log('hahah');
console.log(someAction(5, 15, calcSum));